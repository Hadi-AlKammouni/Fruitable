import { useState, useEffect, useRef } from 'react';
import './styles.css'
const Groceries = () => {

  const [groceries, setGroceries] = useState([])
  const scrollRef = useRef()

  const getGroceries = async (state) => {
    try {
        const response = await fetch(`http://192.168.0.108:5000/api/v1/user/get_groceries`);
        const data = await response.json();
        setGroceries(data)
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
            <div ref={scrollRef} key={index} className="grocery">
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