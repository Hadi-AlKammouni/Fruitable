import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './Home/HomeScreen';
import OrdersScreen from "./OrdersScreen";
import AccountScreen from "./Account/AccountScreen";
import GroceryScreen from "./GroceryScreen";

const RootStack = createStackNavigator();

const Userscreen = () => {
  return(
    <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} 
        options={({headerShown: false})}
        />
        <RootStack.Screen name="Order" component={OrdersScreen} 
        options={{title: 'Your Order'}}
        />
        <RootStack.Screen name="Account" component={AccountScreen} />
        <RootStack.Screen name="Grocery" component={GroceryScreen} 
        options={({headerShown: false})}
        />
    </RootStack.Navigator>
  )
  

}

export default Userscreen;