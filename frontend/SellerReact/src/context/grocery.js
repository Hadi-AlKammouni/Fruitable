import React, { useState } from "react";

export const GroceryContext = React.createContext();

const GroceryProvider = ({children}) => {
    
    const [groceryId, setGroceryId] = useState('')
    const [groceryName, setGroceryName] = useState('')
    const [groceryPhoneNumber, setGroceryPhoneNumber] = useState('')
    const [groceyDescription, setGroceryDescription] = useState('')
    const [groceryLatitude, setGroceryLatitude] = useState('')
    const [groceryLongitude, setGroceryLongitude] = useState('')
    const [groceryPicture, setGroceryPicture] = useState('')
    const [groceryCategories, setGroceryCategories] = useState([])
    const [groceryItems, setGroceryItems] = useState([])
    const [groceryOrder, setGroceryOrder] = useState('')
    const [groceryReviews, setGroceryReviews] = useState([])

    return (
        <GroceryContext.Provider 
        value={{
            groceryId, setGroceryId,
            groceryName, setGroceryName, 
            groceryPhoneNumber, setGroceryPhoneNumber, 
            groceyDescription, setGroceryDescription, 
            groceryLatitude, setGroceryLatitude, 
            groceryLongitude, setGroceryLongitude, 
            groceryPicture, setGroceryPicture, 
            groceryCategories, setGroceryCategories,
            groceryItems, setGroceryItems, 
            groceryOrder, setGroceryOrder,
            groceryReviews, setGroceryReviews}}>

            {children}

        </GroceryContext.Provider>
    )
}

export default GroceryProvider;

export const useGrocery = () => {
    const {
        groceryId, setGroceryId,
        groceryName, setGroceryName, 
        groceryPhoneNumber, setGroceryPhoneNumber,  
        groceyDescription, setGroceryDescription, 
        groceryLatitude, setGroceryLatitude, 
        groceryLongitude, setGroceryLongitude, 
        groceryPicture, setGroceryPicture, 
        groceryCategories, setGroceryCategories,
        groceryItems, setGroceryItems,
        groceryOrder, setGroceryOrder,
        groceryReviews, setGroceryReviews} = React.useContext(GroceryContext)

    return {
        groceryId, setGroceryId,
        groceryName, setGroceryName,
        groceryPhoneNumber, setGroceryPhoneNumber,  
        groceyDescription, setGroceryDescription, 
        groceryLatitude, setGroceryLatitude, 
        groceryLongitude, setGroceryLongitude, 
        groceryPicture, setGroceryPicture, 
        groceryCategories, setGroceryCategories,
        groceryItems, setGroceryItems,
        groceryOrder, setGroceryOrder,
        groceryReviews, setGroceryReviews
    }
}