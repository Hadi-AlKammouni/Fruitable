import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import ReviewsPopUp from '../components/ReviewsPopUp';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
import ButtonComponent from '../components/ButtonComponent';
import constants from '../constants';
import { LogBox } from "react-native";

const GroceyScreen = ( {navigation, route} ) => {

  const groceryId = route.params;
  const [grocery, setGrocery] = useState([])
  const [orderId, setOrderId] = useState('')

  const getGrocery = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}get_groceries?id=${groceryId.id}`);
      const data = await response.json();
      setGrocery(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    getGrocery();
  }, [groceryId.id]);

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} >
        <Image source={{uri: grocery.picture}} style={styles.picture}/>
        <Text style={styles.major_info}> {grocery.name} - {grocery.phone_number}</Text>
        <Text style={styles.description}> {grocery.description} </Text>
        <GroceryRate grocery={grocery}/>
        <ReviewsPopUp grocery={grocery}/>
        <SubmitReviewPopUp grocery_id={grocery._id}/>
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