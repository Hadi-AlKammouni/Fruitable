import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, View, FlatList } from 'react-native';
import ViewCart from '../components/ViewCart';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';
import { useUser } from '../context/user';
import * as Notifications from 'expo-notifications';
import { doc, getDoc } from "firebase/firestore"; 

const OrdersScreen = ({navigation}) => {

  const {
    groceryName,
    groceryPhoneNumber,
    groceyDescription,
  } = useGrocery()

  const {userOrder,userFirstName,userId} = useUser()
  const [cartItems,setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const viewCart = async () => {
    try {
      const order = await userOrder;
      const token = await AsyncStorage.getItem('token');

      const response = await fetch(`${constants.fetch_url}view_cart?id=${order}`,{
        headers: {
          'x-access-token': token,
        }
      });
      const data = await response.json();
      setCartItems(data)    
      setIsLoading(false)

    } catch (error) {
      console.error(error);
    }
  };

  // Getting the token to push the notification
  const getToken = async () => {
    const docSnap = await getDoc(doc(constants.firestore, "users", userId));
    navigation.navigate('Home')
    sendPushNotification(docSnap.data().token)
  }

  // Sending the notification
  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: `Fruitable to ${userFirstName} 🍏`,
      body: 'Your order has been sent successfully.',
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  useEffect(() => {
    viewCart();

    //Notification fucntions:
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        LisHeaderComponent={<></>}
        ListFooterComponent={
          <>
            <Text style={styles.major_info}> {groceryName} - {groceryPhoneNumber} </Text>
            <Text style={styles.description}> {groceyDescription}</Text>
            {isLoading ?  
            <View style={styles.activity}>
              <ActivityIndicator size={50}/>
            </View>
            :
            null
            }
            <ViewCart items={cartItems} />
          </>
        }
      />
      <TouchableOpacity style={styles.order}>
        <Text style={styles.orderBtn} onPress={() => getToken()}>Order Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  major_info: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    padding: 15,
    borderBottomWidth: 8,
    borderBottomColor: '#FDBE3B'
  },
  order: {
    backgroundColor: '#FDBE3B',
    height: 50,
  },
  orderBtn: {
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