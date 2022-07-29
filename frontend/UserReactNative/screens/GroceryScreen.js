import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
import constants from '../constants';
import { LogBox } from "react-native";
import { useGrocery } from '../context/grocery';
import { useUser } from '../context/user';
import ReviewsPopUp from '../components/ReviewsPopUp';
import { MaterialIcons } from "@expo/vector-icons";

const GroceyScreen = ( {navigation,navigation: { goBack }} ) => {

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
    setGroceryReviews,
  } = useGrocery()

  const {pickedItem} = useUser()

  const [grocery, setGrocery] = useState([])
  const [isItems, setIsItems] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


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
      setIsLoading(false)
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
      {/* GroceryHeader */}
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => goBack()} style={styles.backIcon}/>
        <Text style={styles.headerText}>
          {groceryName}
        </Text>
      </View>

      {isLoading ?  
        <View style={styles.activity}>
          <ActivityIndicator size={50}/>
        </View>
        :
        null
      }
        <ScrollView style={styles.scrollView} >
          <Image source={{uri: grocery.picture}} style={styles.picture}/>
          <Text style={styles.major_info}>Call Us - {groceryPhoneNumber}</Text>
          <Text style={styles.description}> {groceyDescription} </Text>
          <GroceryRate />
          <View style={styles.review}>
            <SubmitReviewPopUp />
            <ReviewsPopUp />
          </View>
          <ViewItems />
        </ScrollView>

        {pickedItem === true ? 
          <TouchableOpacity style={styles.cart} >
            <Text style={styles.viewCart} onPress={() => navigation.navigate("Order")}>View Cart</Text>         
          </TouchableOpacity>
          : null
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ffffff',
  },
  picture: {
    height: 250
  },
  major_info: {
    fontSize:28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25
  },
  description: {
    fontSize:18,
    textAlign: 'center'
  },
  review: {
    flexDirection:'row',
    marginTop:35,
    marginBottom:35,
  },
  header: {
    height: 50,
    marginTop: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDBE3B',
  },
  headerText: {
      fontWeight: 'bold',
      fontSize: 26,
      letterSpacing: 3
  },
  backIcon: {
    position: 'absolute',
    left: 16
  },
  button: {
    height: 200
  },
  cart: {
    backgroundColor: '#FDBE3B',
    height: 50,
  },
  viewCart: {
    top: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  activity: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: "center",
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)'
},
});

export default GroceyScreen;