import { useState, useEffect, useRef } from 'react';
import constants from '../../constants/constants';
import { useGrocery } from '../../context/grocery';
import './styles.css'

const Groceries = ({setIsChat}) => {

  const [groceries, setGroceries] = useState([])
  const scrollRef = useRef()
  const {groceryToken,groceryId} = useGrocery()

  const getGroceries = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/user/get_groceries`);
        const data = await response.json();
        setGroceries(data)
    } catch (error) {
      console.error(error);
    }
  };

  const newConversation = async (grocery) => {
    try {
      const response = await fetch(`${constants.fetch_url}new_conversation`, {
        method: 'POST',
        headers: {
          'x-access-token': groceryToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            senderId: groceryId,
            receiverId: grocery,
        })
      });
      const data = await response.json()
      setIsChat(true)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <div className='container'>
      <div className='grocery-box'>
        <div className='grocery-box-top'>
          {groceries.map((grocery,index) => (
            <div ref={scrollRef} key={index} className="grocery" onClick={()=>newConversation(grocery._id)}>
              <img className='grocery-img' src={grocery?.picture} alt='' />
              <span className='grocery-name'>{grocery?.name}</span>
            </div>
          ))}
        </div>
       </div>
    </div>
  );
}

export default Groceries;