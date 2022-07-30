import './styles.css';
import register from '../../assets/register.png';

const ChatOnline = () => {
    return (
            <div className='chat-online'>
                <div className='chat-online-groceries'>
                    <div className='chat-online-img-container'>
                        <img src={register} alt='' className='chat-online-img'/>
                        <div className='chat-online-badge'></div>
                    </div>
                    <span className='chat-online-name'>hadi</span>
                </div>
                <div className='chat-online-groceries'>
                    <div className='chat-online-img-container'>
                        <img src={register} alt='' className='chat-online-img'/>
                        <div className='chat-online-badge'></div>
                    </div>
                    <span className='chat-online-name'>hadi</span>
                </div>
                <div className='chat-online-groceries'>
                    <div className='chat-online-img-container'>
                        <img src={register} alt='' className='chat-online-img'/>
                        <div className='chat-online-badge'></div>
                    </div>
                    <span className='chat-online-name'>hadi</span>
                </div>
            </div>
    )
}

export default ChatOnline;