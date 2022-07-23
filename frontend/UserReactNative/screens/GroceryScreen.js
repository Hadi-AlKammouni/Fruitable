import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import ReviewsPopUp from '../components/ReviewsPopUp';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
import ButtonComponent from '../components/ButtonComponent';
import constants from '../constants';
import { LogBox } from "react-native";
import { useGrocery } from '../context/grocery';

const GroceyScreen = ( {navigation} ) => {

  const {
    groceryId,
    groceryName,setGroceryName, 
    groceryPhoneNumber,setGroceryPhoneNumber, 
    groceyDescription,setGroceryDescription,
    setGroceryLatitude, 
    setGroceryLongitude, 
    setGroceryPicture, 
    setGroceryCategories,
    setGroceryItems,
    setGroceryOrders,
    setGroceryReviews
  } = useGrocery()

  const [grocery, setGrocery] = useState([])
  const [orderId, setOrderId] = useState('')

  const getGrocery = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}get_groceries?id=${groceryId}`);
      const data = await response.json();
      setGrocery(data)
      setGroceryName(data.name) 
      setGroceryPhoneNumber(data.phone_number) 
      setGroceryDescription(data.description)
      setGroceryLatitude(data.latitude) 
      setGroceryLongitude(data.longitude) 
      setGroceryPicture(data.picture) 
      setGroceryCategories(data.categories)
      setGroceryItems(data.items)
      setGroceryOrders(data.orders)
      setGroceryReviews(data.reviews)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    getGrocery();
  }, [groceryId]);

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} >
        <Image source={{uri: grocery.picture}} style={styles.picture}/>
        <Text style={styles.major_info}> {groceryName} - {groceryPhoneNumber}</Text>
        <Text style={styles.description}> {groceyDescription} </Text>
        <GroceryRate />
        <ReviewsPopUp />
        <SubmitReviewPopUp />
        <ViewItems grocery={grocery.items} id={grocery._id} setState={setOrderId}/>
        
        <ButtonComponent 
          onPress={() => navigation.navigate("Order",{orderId,grocery}) }
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="My Cart"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
  picture: {
    height: 250
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

export default GroceyScreen;