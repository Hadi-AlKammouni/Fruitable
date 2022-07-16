import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const ButtomTab = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70
                }
            }}  
        >

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image 
                            source={require("../assets/icons8-home-100.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                        <Text style={{color: focused ? '#FDBE3B' : '#000000', fontSize:12}}> Home </Text>
                    </View>
                )
            }}/>

            <Tab.Screen name="Order" component={OrdersScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image source={require("../assets/icons8-fast-cart-100.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                        <Text style={{color: focused ? '#FDBE3B' : '#000000', fontSize:12}}> Orders </Text>
                    </View>
                )
            }}/>

            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                        <Image source={require("../assets/icons8-test-account-1000.png")}
                            resizeMode='contain'
                            style={{width:55,height:55,tintColor: focused ? '#FDBE3B' : '#000000',}}
                        />
                        <Text style={{color: focused ? '#FDBE3B' : '#000000', fontSize:12}}> Account </Text>
                    </View>
                )
            }}/>
            
        </Tab.Navigator>
    )
}

export default ButtomTab;