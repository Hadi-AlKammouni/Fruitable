import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native';
import ViewItems from '../components/ViewItems';
import ButtonComponent from '../components/ButtonComponent';

const OrdersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.major_info}> Grocery Name - Location - Phone Number</Text>
        <Text style={styles.description}> Grocery Description</Text>
        <ButtonComponent 
          onPress={() => alert("Hello World!") }
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="Order Now"
        />
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