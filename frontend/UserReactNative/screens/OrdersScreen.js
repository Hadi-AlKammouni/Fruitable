import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button, View, PushNotificationIOS } from 'react-native';
import ViewCart from '../components/ViewCart';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';
import axios from 'axios';
import { useUser } from '../context/user';

const OrdersScreen = () => {

  const {
    groceryName,
    groceryPhoneNumber,
    groceyDescription,
  } = useGrocery()

  const {userOrder,userFirstName} = useUser()
  const [cartItems,setCartItems] = useState([])

  const viewCart = async () => {
    try {
      const order = await userOrder;
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${constants.fetch_url}view_cart?id=${order}`,{
        headers: {
          'x-access-token': token,
        }
      });
      const data = await response.json();
      setCartItems(data)    
      console.log(data)  
    } catch (error) {
      console.error(error);
    }
  };

  const pushNotfication = () => {
    axios.post(`https://app.nativenotify.com/api/notification`, {
      appId: 3343,
      appToken: "5MVe2pBuNkF25Ck9aVb66d",
      title: "New Order",
      body: "Your order is received successfully.",
      dateSent: "7-27-2022 8:13PM",
      pushData: { yourProperty: "yourPropertyValue" }
    });
  }

  useEffect(() => {
    viewCart();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.major_info}> {groceryName} - {groceryPhoneNumber} </Text>
        <Text style={styles.description}> {groceyDescription}</Text>
        <ViewCart items={cartItems}/>
        <View style={styles.order}>
          <Button title="Order Now" color={"#FDBE3B"} onPress={() => pushNotfication()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  major_info: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    padding: 15,
    borderBottomWidth: 8,
    borderBottomColor: '#FDBE3B'
  },
  order: {
    marginTop: 25
  }
});