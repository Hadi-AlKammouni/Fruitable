import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
import constants from '../constants/constants';
import { useGrocery } from '../context/grocery';
import { useUser } from '../context/user';
import ReviewsPopUp from '../components/ReviewsPopUp';
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

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
    setGroceryReviews,
  } = useGrocery()

  const {pickedItem, cartPrice, cartQuantity, token} = useUser()

  const [grocery, setGrocery] = useState([])
  const [isItems, setIsItems] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [displayItems, setDisplayItems] = useState(false) // To display items for the selected grocery


  const getGrocery = async () => {
    try {
      const token = await AsyncStorage.getItem('token')
      const response = await fetch(`${constants.fetch_url}get_groceries?id=${groceryId}`,{
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        },
      });
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
      setDisplayItems(true)
    } catch (error) {
      showMessage({
        message: "Something went wrong.",
        type: "danger",
      });
    }
  };

  useEffect(() => {
    getGrocery();
  }, [groceryId,isItems]);

  return (
    <SafeAreaView style={styles.container} >

      {/* GroceryHeader */}
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.navigate('Home')} style={styles.backIcon}/>
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

        <FlatList
          style={styles.flatList}
          LisHeaderComponent={<></>}
          ListFooterComponent={
            <>
             <Image source={{uri: grocery.picture}} style={styles.picture}/>
              <Text style={styles.major_info}>Call Us - {groceryPhoneNumber}</Text>
              <Text style={styles.description}> {groceyDescription} </Text>
              <GroceryRate />
              <View style={styles.review}>
                <SubmitReviewPopUp />
                <ReviewsPopUp />
              </View>
              {displayItems? <ViewItems /> : null}
            </>
          }
        />

        {pickedItem === true ? 
          <TouchableOpacity style={styles.cart} >
            <Text style={styles.viewCart} onPress={() => navigation.navigate("Order")}>{cartQuantity}x View Cart (LBP {cartPrice})</Text>         
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
  flatList: {
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