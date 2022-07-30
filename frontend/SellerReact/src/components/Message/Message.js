import './styles.css';
import register from '../../assets/register.png';

const Message = ({own}) => {
    return (
        <div className={own ? 'message own' : 'message'}>
            <div className='message-top'>
                <img src={register} alt='' className='message-img'/>
                <p className='message-text'>HELLO THIS IS HADI</p>
            </div>
            <div className='message-bottom'>1 hour ago</div>
        </div>
    )
}

export default Message;