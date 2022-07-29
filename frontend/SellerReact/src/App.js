import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Sidebar from './components/Sidebar/Sidebar'
import './index.css';
import Stock from "./pages/Stock/Stock";
import AddItem from "./pages/AddItem/AddItem";
import Review from  './pages/Review/Review'
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import { useGrocery } from "./context/grocery";
import { useEffect } from "react";

const App = () => {

  const {
    setGroceryId,
    setGroceryToken,
    setGroceryName, 
    setGroceryPhoneNumber, 
    setGroceryDescription, 
    setGroceryLatitude, 
    setGroceryLongitude,
    setGroceryPicture, 
    setGroceryCategories,
    setGroceryItems, 
    setGroceryOrder,
    setGroceryReviews,
  } = useGrocery()
  
  // Making sure that the grocery info are in grocery context even upon refreshing
  const getData = () => {
    const id = localStorage.getItem("_id")
    const token = localStorage.getItem("token")
    const name = localStorage.getItem("name")
    const phone_number = localStorage.getItem('phone_number')
    const description = localStorage.getItem('description')
    const latitude = localStorage.getItem('latitude')
    const longitude = localStorage.getItem('longitude')
    const picture = localStorage.getItem('picture')
    const categories = localStorage.getItem('categories')
    const items = localStorage.getItem('items')
    const orders = localStorage.getItem('orders')
    const reviews = localStorage.getItem('reviews')
    setGroceryId(id)
    setGroceryToken(token)
    setGroceryName(name) 
    setGroceryPhoneNumber(phone_number) 
    setGroceryDescription(description) 
    setGroceryLatitude(latitude) 
    setGroceryLongitude(longitude)
    setGroceryPicture(picture) 
    setGroceryCategories(categories)
    setGroceryItems(items) 
    setGroceryOrder(orders)
    setGroceryReviews(reviews)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    <BrowserRouter>
      <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
        </div>
        <div className="View">
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="reviews" element={<Review/>}></Route>
            <Route path="stock" element={<Stock/>}></Route>
            <Route path="add_item" element={<AddItem/>}></Route>
            <Route path="manage_orders" element={<ManageOrders/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
          </Routes>
        </div>
        {/* </div> */}
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;