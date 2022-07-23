import React, {useState, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from "./Login/LoginScreen";
import SignupScreenOne from './Signup/SignupScreenOne';
import SignupScreenTwo from "./Signup/SignupScreenTwo";
import SignupScreenThree from "./Signup/SignupScreenThree";
import SignupScreenFour from "./Signup/SignupScreenFour";
import UserScreen from './Userscreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootStack = createStackNavigator();

const RootStackScreen = () => {  

    const [isLoggedIn, setIsLoggedIn] = useState('')

    const isToken = async () => {
        try{
            const token = await AsyncStorage.getItem('token');
            if(token){
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        isToken();
    }, []);

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
        <RootStack.Screen name="SignupScreenFour" component={SignupScreenFour} />
        </>)
        :
        ( <RootStack.Screen name="UserScreen" component={UserScreen} /> )
        }
    </RootStack.Navigator>
)}

export default RootStackScreen;