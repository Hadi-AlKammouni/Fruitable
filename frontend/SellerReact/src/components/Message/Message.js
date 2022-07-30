import './styles.css';
import register from '../../assets/register.png';
import {format} from 'timeago.js';

const Message = ({message,own}) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className='message-top'>
                <img src={register} alt='' className='message-img'/>
                <p className='message-text'>{message.text}</p>
            </div>
            <div className='message-bottom'>{format(message.createdAt)}</div>
        </div>
    )
}

export default Message;