import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from 'react-native';

import HomeScreen from '../screens/Home/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import GroceryScreen from '../screens/GroceryScreen';

const Tab = createBottomTabNavigator();

const ButtomTab = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 50
                }
            }}  
        >

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image 
                            source={require("../assets/icons/icons8-home-100.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                    </View>
                ),
                unmountOnBlur: true
            }}/>

            <Tab.Screen name="Order" component={OrdersScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require("../assets/icons/icons8-fast-cart-100.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                    </View>
                ),
                unmountOnBlur: true
            }}/>

            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require("../assets/icons/icons8-test-account-1000.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                    </View>
                ),
                unmountOnBlur: true
            }}/>

            <Tab.Screen name="Grocery" component={GroceryScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require("../assets/icons/icons8-fruit-bag-50.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                    </View>
                ),
                unmountOnBlur: true
            }}/>
            
        </Tab.Navigator>
    )
}

export default ButtomTab;