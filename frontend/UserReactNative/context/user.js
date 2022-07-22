import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = ({children}) => {
    
    const [userId, setUserId] = useState('')
    const [userFirstName, setUserFirstname] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [token, setToken] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userLatitude, setUserLatitude] = useState('')
    const [userLongitude, setUserLongitude] = useState('')
    const [userProfilePicture, setUserProfilePicture] = useState('')

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
            userProfilePicture, setUserProfilePicture}}>

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
        userProfilePicture, setUserProfilePicture} = React.useContext(UserContext)

    return {
        userId, setUserId,
        userFirstName, setUserFirstname,
        userLastName, setUserLastName, 
        userEmail, setUserEmail, 
        token, setToken, 
        userGender, setUserGender, 
        userLatitude, setUserLatitude,
        userLongitude, setUserLongitude,
        userProfilePicture, setUserProfilePicture
    }
}