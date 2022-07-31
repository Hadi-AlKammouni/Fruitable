import { useEffect, useRef } from 'react';
import { useState } from 'react';
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import Conversation from '../../components/Conversations/Conversation';
import Message from '../../components/Message/Message';
import './styles.css';
import constants from '../../constants';
import {io} from 'socket.io-client';

const Chat = () => {

    const [conversations,setConversations] = useState([])
    const [currentChat,setCurrentChat] = useState(null)
    const [messages,setMessages] = useState([])
    const [newMessage,setNewMessage] = useState("")
    const [arrivalMessage,setArrivalMessage] = useState(null)
    const grocery_id = localStorage.getItem('_id')
    const scrollRef = useRef()
    const socket = useRef(io("ws://localhost:8900"))

    const getConversations = async () => {
        try {
            const grocery_id = localStorage.getItem('_id')
            const response = await fetch(`${constants.fetch_url}get_conversation?id=${grocery_id}`);
            const data = await response.json()
            setConversations(data)
        } catch (error) {
            console.error(error);
        }
    }

    const getMessages = async () => {
        try {
            const response = await fetch(`${constants.fetch_url}get_message?id=${currentChat?._id}`);
            const data = await response.json()
            setMessages(data)
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (e) => {
        try {

            const receiverId = currentChat.members.find(member => member !== grocery_id)

            socket.current.emit("sendMessage",{
                senderId: grocery_id,
                receiverId,
                text: newMessage
            })

            e.preventDefault();
            const response = await fetch(`${constants.fetch_url}add_message`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender: grocery_id,
                    text: newMessage,
                    conversationId: currentChat._id
                })
            });
            const data = await response.json()
            setMessages([...messages, data.text])
            setNewMessage("")
        } catch (error) {
            console.error(error);
        } 
    }

    useEffect(() => {
        getConversations()
    },[])

    useEffect(() => {
        getMessages()
    },[currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    },[messages])

    useEffect(() => {
        // sending to server
        socket.current.emit("addGrocery", grocery_id) 
        // getting from server
        socket.current.on("getGroceries",groceries => {
            console.log(groceries)
        }) 
    },[grocery_id])

    useEffect(() => {
        socket.current = io("ws:localhost:8900")
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    },[])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage]) 
    },[arrivalMessage,currentChat])


    return (
        <div className='chat'>
            <div className='chat-menu'>
                <div className='chat-menu-wrapper'>
                    <input placeholder='Search for groceries' className='chat-menu-input'/>
                    {conversations.map((conversation,index) => (
                        <div onClick={()=>setCurrentChat(conversation)} key={index}>
                            <Conversation conversation={conversation}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='chat-box'>
                <div className='chat-box-wrapper'>
                    {
                        currentChat ? 
                    <>
                    <div className='chat-box-top'>
                        {messages.map((message,index) => (
                            <div ref={scrollRef} key={index}>
                                <Message key={index} message={message} own={message.sender === grocery_id}/>
                            </div>
                        ))}
                        
                    </div>
                    <div className='chat-box-bottom'>
                        <textarea className='chat-msg-input' placeholder='write something...' onChange={(e)=>setNewMessage(e.target.value)} value={newMessage}></textarea>
                        <button className='chat-submit-button' onClick={handleSubmit}>SEND</button>
                    </div>
                    </>
                    :
                    <span className='open-conversation'>Open a conversation to start a chat.</span>
                    }
                </div>
            </div>
            <div className='chat-online'>
                <div className='chat-online-wrapper'>
                    <ChatOnline />
                </div>
            </div>
        </div>
    )
}

export default Chat;