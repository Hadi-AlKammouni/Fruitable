import ChatOnline from '../../components/ChatOnline/ChatOnline';
import Conversation from '../../components/Conversations/Conversation';
import Message from '../../components/Message/Message';
import './styles.css';

const Chat = () => {
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