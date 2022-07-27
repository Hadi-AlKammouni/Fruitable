import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import ViewCart from '../components/ViewCart';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';

const OrdersScreen = () => {

  const {
    groceryName,
    groceryPhoneNumber,
    groceyDescription,
  } = useGrocery()

  const [cartItems,setCartItems] = useState([])

  const viewCart = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const order = await AsyncStorage.getItem('order');

      const response = await fetch(`${constants.fetch_url}view_cart?id=${order}`,{
        headers: {
          'x-access-token': token,
        }
      });
      const data = await response.json();
      setCartItems(data)      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewCart();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.major_info}> {groceryName} - {groceryPhoneNumber} </Text>
        <Text style={styles.description}> {groceyDescription}</Text>
        <ViewCart items={cartItems}/>
        <Button title="Order Now" color={"#FDBE3B"} onPress={() => alert("Receive Notification!")} />
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
    marginBottom: 25
  },
  description: {
    textAlign: 'center'
  },
});