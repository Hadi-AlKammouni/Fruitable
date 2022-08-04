import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import GroceryRate from '../../components/GroceryRate';
import SubmitReviewPopUp from '../../components/SubmitReviewPopUp';
import ViewItems from '../../components/ViewItems';
import constants from '../../constants/constants';
import { useGrocery } from '../../context/grocery';
import { useUser } from '../../context/user';
import ReviewsPopUp from '../../components/ReviewsPopUp';
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";
import styles from './styles';

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

export default GroceyScreen;