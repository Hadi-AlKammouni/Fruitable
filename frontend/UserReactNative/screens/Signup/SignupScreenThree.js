import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';
import UploadImage from '../../components/UploadImage';
import constants from '../../constants';
import {useUser} from '../../context/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, setDoc } from "firebase/firestore"; 
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

const SignupScreenThree = ({ navigation, route }) => {
  
    const {
      setUserId,
      setUserFirstname, 
      setUserLastName, 
      setUserEmail, 
      setToken, 
      setUserGender, 
      setUserProfilePicture
    } = useUser()

    const [picture, setPicture] = useState(null);
    const [expoPushToken, setExpoPushToken] = useState('');
    const { firstName, lastName, gender, email, password } = route.params;

    // Getting expo push notification token
    async function registerForPushNotificationsAsync() {
      let token;
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      return token;
    }

    const createAccount = async () => {
        try{
            const respone = await fetch(`${constants.fetch_url}register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    gender: gender,
                    profile_picture: picture
                })
            });
            const data = await respone.json();

            // Store the user info in UserContext
            if(data._id){
              setUserId(data._id)
              setUserFirstname(data.first_name)
              setUserLastName(data.last_name) 
              setUserEmail(data.email) 
              setToken(data.token) 
              setUserGender(data.gender) 
              setUserProfilePicture(data.profile_picture)
              await AsyncStorage.setItem('token',data.token);
              await AsyncStorage.setItem('user_id',data._id);
              await AsyncStorage.setItem('first_name',data.first_name);
              await AsyncStorage.setItem('last_name',data.last_name);
              !data.profile_picture ? null : await AsyncStorage.setItem('profile_picture',data.profile_picture);
              // Add a new document in collection "users" firebase
              const user = await setDoc(doc(constants.firestore, "users", `${data._id}`), {
                token: expoPushToken,
              });
              navigation.navigate("UserScreen")
            }
        } catch (error) {
            console.log("eeee",error)
        } 
    }

    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    },[])

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Upload Profile Picture</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">

            <UploadImage setState={setPicture}/>

            {/* Continue Button */}
            <ButtonComponent 
              onPress={() => createAccount()}
              touchable_style={styles.button}
              border_color="#FDBE3B"
              text_style={styles.textSign}
              text_color="#FFFFFF"
              text="Create Account"
            />
          </Animatable.View>
        </View>
      );
}

export default SignupScreenThree;