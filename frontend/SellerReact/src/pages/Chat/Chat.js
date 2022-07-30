import { useEffect } from 'react';
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
            const response = await fetch(`${constants.fetch_url}get_message?id=${currentChat._id}`);
            const data = await response.json()
            setMessages(data)
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
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                    </div>
                    <div className='chat-box-bottom'>
                        <textarea className='chat-msg-input' placeholder='write something...'></textarea>
                        <button className='chat-submit-button'>SEND</button>
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