import './styles.css';
import register from '../../assets/register.png'
const Conversation = () => {
    return (
        <>
            <div className='conversation'>
                <img className='conversation-img' src={register} alt='' />
                <span className='conversation-name'>HADI</span>
            </div>
        </>
    )
}

export default Conversation;