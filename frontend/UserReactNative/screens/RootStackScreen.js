import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from "./Login/LoginScreen";
import SignupScreen from './Signup/SignupScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ( {navigation} ) => (
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
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
    </RootStack.Navigator>
)

export default RootStackScreen;