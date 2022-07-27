import React, {useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './Splash/SplashScreen';
import LoginScreen from "./Login/LoginScreen";
import SignupScreenOne from './Signup/SignupScreenOne';
import SignupScreenTwo from "./Signup/SignupScreenTwo";
import SignupScreenThree from "./Signup/SignupScreenThree";
import UserScreen from './Userscreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from "../context/user";
const RootStack = createStackNavigator();

const RootStackScreen = () => {  

    const {
        token,
        setUserId
    } = useUser()

    const token_storage = AsyncStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    const isToken = async () => {
        try{
            const token_storage = await AsyncStorage.getItem('token');
            setIsLoggedIn(token_storage)
            if(token_storage){
                AsyncStorage.getItem('user_id').then(userId=>setUserId(userId));
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isToken();
    }, [token,token_storage]);

    return(
    <RootStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#FDBE3B'
        },
        headerShown:false,
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        

        {!isLoggedIn ? 
        (<>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignupScreenOne" component={SignupScreenOne} />
        <RootStack.Screen name="SignupScreenTwo" component={SignupScreenTwo} />
        <RootStack.Screen name="SignupScreenThree" component={SignupScreenThree} />
        </>)
        :
        (
        <RootStack.Screen name="UserScreen" component={UserScreen} /> 
        )
        }
    </RootStack.Navigator>
)}

export default RootStackScreen;