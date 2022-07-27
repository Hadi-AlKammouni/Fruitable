import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, Button } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
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
    setGroceryReviews
  } = useGrocery()

  const [grocery, setGrocery] = useState([])
  const [isItems, setIsItems] = useState(false)

  const getGrocery = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}get_groceries?id=${groceryId}`);
      const data = await response.json();
      setGrocery(data),
      setGroceryName(data.name) ,
      setGroceryPhoneNumber(data.phone_number),
      setGroceryDescription(data.description),
      setGroceryLatitude(data.latitude) ,
      setGroceryLongitude(data.longitude), 
      setGroceryPicture(data.picture) ,
      setGroceryCategories(data.categories),
      setGroceryItems(data.items),
      setGroceryReviews(data.reviews)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    getGrocery();
  }, [groceryId,isItems]);

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} >
        <Image source={{uri: grocery.picture}} style={styles.picture}/>
        <Text style={styles.major_info}> {groceryName} - {groceryPhoneNumber}</Text>
        <Text style={styles.description}> {groceyDescription} </Text>
        <GroceryRate />
        <SubmitReviewPopUp />
        <ViewItems setIsItems={setIsItems}/>
        {isItems ? 
            <Button title="View Cart" color={"#FDBE3B"} onPress={() => navigation.navigate("Order")} />
        : null
        }
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