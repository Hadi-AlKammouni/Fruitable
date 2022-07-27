import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './Home/HomeScreen';
import OrdersScreen from "./OrdersScreen";
import AccountScreen from "./Account/AccountScreen";
import GroceryScreen from "./GroceryScreen";

const RootStack = createStackNavigator();

const Userscreen = () => {
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
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Order" component={OrdersScreen} />
        <RootStack.Screen name="Account" component={AccountScreen} />
        <RootStack.Screen name="Grocery" component={GroceryScreen} />
    </RootStack.Navigator>
  )
  

}

export default Userscreen;