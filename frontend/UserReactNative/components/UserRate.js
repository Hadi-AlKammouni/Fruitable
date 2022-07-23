import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import TextInputField from './TextInputField';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';

const UserRate = () => {

  const {
    groceryId
  } = useGrocery()

  const [userRating, setUserRating] = useState()
  const [maxRating, setMaxRating] = useState([1,2,3,4,5])
  const [review, setReview] = useState('')

  const reviewGrocery = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');
      const user_first_name = await AsyncStorage.getItem('first_name');

      const response = await fetch(`${constants.fetch_url}review_grocery`, {
        method: 'POST',
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rate: userRating,
            text: review,
            user: user_id,
            grocery: groceryId,
            first_name: user_first_name 
        })
      });
      const res = JSON.stringify(response.status)
      if(res === "200"){
        alert("Review successfully added")
      }
      
    } catch (error) {
      console.log("EROORORORO",error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.txt_rating}> Rate Your Experience </Text>
        <View style={styles.rating}> 
        <Text style={styles.txt_rating}>
            {!userRating ? 0 + ' /' : userRating + ' / ' + maxRating.length}
        </Text>
            {maxRating.map((item, key) => {
            return (
                <TouchableOpacity key={key} activeOpacity={0.7} item={item} onPress={() => setUserRating(item)}>
                  <Image style={styles.img_rating} source={item <= userRating ? require("../assets/icons/icons8-star-488.png") : require("../assets/icons/icons8-star-48.png")}/>
                </TouchableOpacity>
            )})}
        </View>

        <Text style={styles.txt_rating}> Write A Review </Text>
        <TextInputField 
          main_icon={require("../assets/icons/icons8-write-60.png")}
          placeholder="Review.."
          setState={setReview}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => reviewGrocery()}>
            <Text style={styles.submit}>Submit Review</Text>
        </TouchableOpacity>
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
  rating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 25
  },
  img_rating: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  txt_rating: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 23,
    marginTop: 4,
    marginRight: 15 
  },
  submit: {
    color: "#fff",
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#000'
  }

});

export default UserRate;