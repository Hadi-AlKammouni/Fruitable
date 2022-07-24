import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import ViewCart from '../components/ViewCart';
import ButtonComponent from '../components/ButtonComponent';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';

const OrdersScreen = ({ navigation }) => {

  const {
    groceryName,
    groceryPhoneNumber,
    groceyDescription,
    groceryOrder,
  } = useGrocery()

  const [cartItems,setCartItems] = useState([])

  const viewCart = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${constants.fetch_url}view_cart?id=${groceryOrder}`,{
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
        {cartItems.items && cartItems.items.length != 0 ? 
          <ButtonComponent 
          onPress={() => alert("Hello World!") }
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="Order Now"
          />
          :
          <ButtonComponent 
          onPress={() => navigation.goBack()}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="Choose Grocery"
          />
        }
          
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