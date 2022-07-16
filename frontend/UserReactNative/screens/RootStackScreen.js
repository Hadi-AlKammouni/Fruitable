import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './SplashScreen';
import LoginScreen from "./LoginScreen";
import SignupScreen from './SignupScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ( {navigation} ) => (
    <RootStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#FDBE3B'
        },
        headerTintColor: '#FDBE3B',
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