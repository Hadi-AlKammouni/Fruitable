import './styles.css';
import { useEffect, useState } from 'react';
import constants from '../../constants';

const Conversation = ({ conversation }) => {

    const [grocery,setGrocery] = useState(null)
    const grocery_id = localStorage.getItem('_id')

    const getOtherGrocery = async () => {
        try {
            const grocery_id = localStorage.getItem('_id')
            const grocery_token = localStorage.getItem('token')
            const other_grocery = conversation.members.find(member => member !== grocery_id) 
            const response = await fetch(`${constants.fetch_url}view_grocery?id=${other_grocery}`,{
                headers: {
                    'x-access-token': grocery_token,
                }
            });
            const data = await response.json()
            setGrocery(data)
            localStorage.setItem("other_picture",data.picture)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getOtherGrocery()
    }, [grocery_id,conversation])
    
    return (
        <>
            <div className='conversation'>
                <img className='conversation-img' src={grocery?.picture} alt='' />
                <span className='conversation-name'>{grocery?.name}</span>
            </div>
        </>
    )
}

export default Conversation;