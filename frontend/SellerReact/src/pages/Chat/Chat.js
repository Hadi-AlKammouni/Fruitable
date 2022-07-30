import { useEffect, useRef } from 'react';
import { useState } from 'react';
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import Conversation from '../../components/Conversations/Conversation';
import Message from '../../components/Message/Message';
import './styles.css';
import constants from '../../constants';

const Chat = () => {

    const [conversations,setConversations] = useState([])
    const [currentChat,setCurrentChat] = useState(null)
    const [messages,setMessages] = useState([])
    const [newMessage,setNewMessage] = useState("")
    const grocery_id = localStorage.getItem('_id')
    const scrollRef = useRef()

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
                            <div ref={scrollRef}>
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