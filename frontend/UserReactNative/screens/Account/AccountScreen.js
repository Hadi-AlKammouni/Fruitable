import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../context/user';
import UploadImage from '../../components/UploadImage';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputField from '../../components/TextInputField';
import constants from '../../constants/constants';
import { MaterialIcons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import styles from './styles';

const AccountScreen = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [initialFirstName, setInitialFirstName] = useState('');
  const [initialLastName, setInitialLastName] = useState('');
  const [initialProfilePicture, setInitialProfilePicture] = useState('');
  const {setToken,setCartPrice,setCartQuantity,setUserOrder,setPickedItem} = useUser();

  const getUserInfo = async () => {
    const first_name = await AsyncStorage.getItem('first_name');
    const last_name = await AsyncStorage.getItem('last_name');
    const profile_picture = await AsyncStorage.getItem('profile_picture');
    setFirstName(first_name)
    setLastName(last_name)
    setProfilePicture(profile_picture)
    // To check if there is new change
    setInitialFirstName(first_name)
    setInitialLastName(last_name)
    setInitialProfilePicture(profile_picture)
  }

  const updateProfile = async () => {
    try{
      const token = await AsyncStorage.getItem('token');
      const user_id = await AsyncStorage.getItem('user_id');
      if (initialFirstName === firstName && initialLastName === lastName && initialProfilePicture === profilePicture ){
        showMessage({
          message: "You didn't make any change",
          type: "warning",
        });
      } else {
        const respone = await fetch(`${constants.fetch_url}update_profile?id=${user_id}`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                profile_picture: profilePicture
            })
        });
        const data = await respone.json();
        if(data.status === "200"){
          if(firstName) await AsyncStorage.setItem('first_name',firstName);
          if(lastName) await AsyncStorage.setItem('first_name',lastName);
          if(profilePicture) await AsyncStorage.setItem('first_name',firstName);
          getUserInfo()
          showMessage({
            message: data.message,
            type: "success",
          });
          navigation.navigate("Home")
        }
      }  
    } catch (error) {
      showMessage({
        message: "Something went wrong.",
        type: "danger",
      });
    } 
  }

  const logOut = async () => {
    // Resset the cart
    setCartPrice(0)
    setCartQuantity(0)
    setUserOrder(null)
    setPickedItem(null)
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user_id');
    await AsyncStorage.removeItem('first_name');
    await AsyncStorage.removeItem('last_name');
    await AsyncStorage.removeItem('profile_picture');
    await AsyncStorage.removeItem('order');
    setToken(null)
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <ScrollView style={{backgroundColor: "#fff"}}>

      {/* AccountHeader */}
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style={styles.back_icon}/>
        <Text style={styles.header_text}> {firstName}'s Account </Text>
      </View>

      <View style={styles.container}>  
        <View style={styles.footer} >
          <UploadImage setState={setProfilePicture} />

          <TextInputField 
            label="First Name" 
            main_icon={require("../../assets/icons/icons8-name-48.png")}
            placeholder={`enter new first name`}
            setState={setFirstName}
          />

          <TextInputField 
            label="Last Name" 
            main_icon={require("../../assets/icons/icons8-name-48.png")}
            placeholder={`enter new last name`}
            setState={setLastName}
          />

          {/* Update Profile Button */}
          <ButtonComponent 
            onPress={() => updateProfile() }
            touchable_style={styles.button}
            border_color="#FDBE3B"
            text_style={styles.text_sign}
            text_color="#FFFFFF"
            text="Update Profile"
          />

          {/* Log Out Button */}
          <ButtonComponent 
            onPress={() => logOut()}
            touchable_style={styles.logout}
            border_color="red"
            text_style={styles.text_sign}
            text_color="#FFFFFF"
            text="Log Out"
          />
        </View>
      </View>
      </ScrollView>
  );
}

export default AccountScreen;