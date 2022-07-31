import './styles.css';
import register from '../../assets/register.png';
import {format} from 'timeago.js';

const Message = ({message,own}) => {

    const picture = localStorage.getItem('picture')
    const other_picture = localStorage.getItem("other_picture")
            
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className='message-top'>
                {own ?
                    <img src={picture} alt='' className='message-img'/>
                :
                <img src={other_picture} alt='' className='message-img'/>    
                }
                <p className='message-text'>{message.text}</p>
            </div>
            <div className='message-bottom'>{format(message.createdAt)}</div>
        </div>
    )
}

export default Message;