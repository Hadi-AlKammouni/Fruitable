import React, { useState } from "react";

export const UserContext = React.createContext();

const UserProvider = ({children}) => {

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('')
    const [profilePicture, setProfilePicture] = useState('')

    return (
        <UserContext.Provider 
        value={{
            firstName, setFirstname, 
            lastName, setLastName, 
            email, setEmail, 
            token, setToken, 
            gender, setGender, 
            location, setLocation, 
            profilePicture, setProfilePicture}}>

            {children}

        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUser = () => {
    const {
        firstName, setFirstname, 
        lastName, setLastName, 
        email, setEmail, 
        token, setToken, 
        gender, setGender, 
        location, setLocation, 
        profilePicture, setProfilePicture} = React.useContext(UserContext)

    return {
        firstName, setFirstname,
        lastName, setLastName, 
        email, setEmail, 
        token, setToken, 
        gender, setGender, 
        location, setLocation, 
        profilePicture, setProfilePicture
    }
}