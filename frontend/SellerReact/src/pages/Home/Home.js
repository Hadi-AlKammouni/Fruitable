import React, {useEffect} from "react";
import './styles.css'
import constants from "../../constants";
import {useGrocery} from '../../context/grocery';

const Home = () => {

  const token = localStorage.getItem('token')
  const grocery_id = localStorage.getItem('_id')
  
  const {
    setGroceryName, 
    setGroceryPhoneNumber, 
    setGroceryDescription, 
    setGroceryLatitude, 
    setGroceryLongitude, 
    setGroceryPicture, 
    setGroceryCategories,
    setGroceryItems, 
    setGroceryOrder,
    setGroceryReviews
  } = useGrocery()

  const veiwGrocery = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}view_grocery?id=${grocery_id}`,{
        headers: {
          'x-access-token': token,
        }
      });
      const data = await response.json();
      if(data._id){
        setGroceryName(data.name) 
        setGroceryPhoneNumber(data.phone_number) 
        setGroceryDescription(data.description) 
        setGroceryLatitude(data.latitude) 
        setGroceryLongitude(data.longitude) 
        setGroceryPicture(data.picture) 
        setGroceryCategories(data.categories)
        setGroceryItems(data.items) 
        setGroceryOrder(data.orders)
        setGroceryReviews(data.reviews)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    veiwGrocery()
  }, []);

    return (
      <div className="home"> 
        <h1> Home! </h1>
      </div>
    );
}
  
export default Home;  