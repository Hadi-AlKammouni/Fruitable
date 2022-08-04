import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, View, FlatList } from 'react-native';
import ViewCart from '../components/ViewCart';
import constants from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from '../context/grocery';
import { useUser } from '../context/user';
import * as Notifications from 'expo-notifications';
import { doc, getDoc } from "firebase/firestore"; 
import { MaterialIcons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";

const OrdersScreen = ({navigation}) => {

  const {
    groceryName,
    groceryPhoneNumber,
    groceyDescription,
  } = useGrocery()

  const {userOrder,userFirstName,userId,cartPrice,setCartPrice,cartQuantity,setCartQuantity,setUserOrder,setPickedItem} = useUser()
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
      showMessage({
        message: "Something went wrong.",
        type: "danger",
      });
    }
  };

  // Getting the token to push the notification
  const getToken = async () => {
    const docSnap = await getDoc(doc(constants.firestore, "users", userId));
    // Resset the cart
    setCartItems([])
    setCartPrice(0)
    setCartQuantity(0)
    setUserOrder(null)
    setPickedItem(null)
    // Navigate to home screen + send firebase push notification
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

  }, [cartPrice]);

  return (
    <SafeAreaView style={styles.container}>

      {/* OrderHeader */}
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style={styles.backIcon}/>
        <Text style={styles.headerText}> Your Order </Text>
      </View>

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
        <Text style={styles.orderBtn} onPress={() => getToken()}>{cartQuantity}x Order Now (LBP {cartPrice})</Text>
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
});