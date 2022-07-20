import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import ReviewsPopUp from '../components/ReviewsPopUp';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';

const GroceyScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.picture} source={require('../assets/grocery.png')}/>
        <Text style={styles.major_info}> Grocery Name - Location - Phone Number</Text>
        <Text style={styles.description}> Grocery Description</Text>
        <GroceryRate/>
        <ReviewsPopUp/>
        <SubmitReviewPopUp/>
        <ViewItems/>
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