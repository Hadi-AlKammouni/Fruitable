import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import GroceryRate from '../components/GroceryRate';
import ReviewsPopUp from '../components/ReviewsPopUp';
import SubmitReviewPopUp from '../components/SubmitReviewPopUp';
import ViewItems from '../components/ViewItems';
import ButtonComponent from '../components/ButtonComponent';

const GroceyScreen = ( {navigation, route} ) => {

  const {groceries} = route.params;
  
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView} >
        <Image style={styles.picture} source={require('../assets/grocery.png')}/>
        <Text style={styles.major_info}> Grocery Name - Location - Phone Number</Text>
        <Text style={styles.description}> Grocery Description</Text>
        <GroceryRate/>
        <ReviewsPopUp/>
        <SubmitReviewPopUp/>
        <ViewItems/>
        <ButtonComponent 
          onPress={() => navigation.navigate("Order") }
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