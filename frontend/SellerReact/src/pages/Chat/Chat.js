import { useEffect } from 'react';
import { useState } from 'react';
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import Conversation from '../../components/Conversations/Conversation';
import Message from '../../components/Message/Message';
import './styles.css';
import constants from '../../constants';

const Chat = () => {

    const [conversations,setConversations] = useState([])

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

    useEffect(() => {
        getConversations()
    },[])

    return (
        <div className='chat'>
            <div className='chat-menu'>
                <div className='chat-menu-wrapper'>
                    <input placeholder='Search for groceries' className='chat-menu-input'/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                </div>
            </div>
            <div className='chat-box'>
                <div className='chat-box-wrapper'>
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