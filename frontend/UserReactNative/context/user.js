import React, { useState } from "react";
import * as Notifications from 'expo-notifications';

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
    
    // For firebase push notification
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
    });

    const [userId, setUserId] = useState('')
    const [userFirstName, setUserFirstname] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [token, setToken] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userLatitude, setUserLatitude] = useState('')
    const [userLongitude, setUserLongitude] = useState('')
    const [userProfilePicture, setUserProfilePicture] = useState('')
    const [userOrder, setUserOrder] = useState(null)
    const [pickedItem,setPickedItem] = useState(false)
    const [checkOrderIdRelativeToGrocery,setCheckOrderIdRelativeToGrocery] = useState(null)
    const [cartPrice,setCartPrice] = useState(0)
    const [cartQuantity,setCartQuantity] = useState(0)

    return (
        <UserContext.Provider 
        value={{
            userId, setUserId,
            userFirstName, setUserFirstname, 
            userLastName, setUserLastName, 
            userEmail, setUserEmail, 
            token, setToken, 
            userGender, setUserGender, 
            userLatitude, setUserLatitude,
            userLongitude, setUserLongitude, 
            userProfilePicture, setUserProfilePicture,
            userOrder, setUserOrder,
            pickedItem,setPickedItem,
            checkOrderIdRelativeToGrocery,setCheckOrderIdRelativeToGrocery,
            cartPrice,setCartPrice,
            cartQuantity,setCartQuantity}}>

            {children}

        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUser = () => {
    const {
        userId, setUserId,
        userFirstName, setUserFirstname, 
        userLastName, setUserLastName, 
        userEmail, setUserEmail, 
        token, setToken, 
        userGender, setUserGender, 
        userLatitude, setUserLatitude,
        userLongitude, setUserLongitude,
        userProfilePicture, setUserProfilePicture,
        userOrder, setUserOrder,
        pickedItem,setPickedItem,
        checkOrderIdRelativeToGrocery,setCheckOrderIdRelativeToGrocery,
        cartPrice,setCartPrice,
        cartQuantity,setCartQuantity} = React.useContext(UserContext)

    return {
        userId, setUserId,
        userFirstName, setUserFirstname,
        userLastName, setUserLastName, 
        userEmail, setUserEmail, 
        token, setToken, 
        userGender, setUserGender, 
        userLatitude, setUserLatitude,
        userLongitude, setUserLongitude,
        userProfilePicture, setUserProfilePicture,
        userOrder, setUserOrder,
        pickedItem,setPickedItem,
        checkOrderIdRelativeToGrocery,setCheckOrderIdRelativeToGrocery,
        cartPrice,setCartPrice,
        cartQuantity,setCartQuantity
    }
}