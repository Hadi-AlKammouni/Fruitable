import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../../context/user';
import UploadImage from '../../components/UploadImage';
import { ScrollView } from 'react-native-gesture-handler';
import TextInputField from '../../components/TextInputField';
import constants from '../../constants';

const AccountScreen = () => {

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState('');
  const [initialFirstName, setInitialFirstName] = useState('');
  const [initialLastName, setInitialLastName] = useState('');
  const [initialProfilePicture, setInitialProfilePicture] = useState('');
  const {setToken} = useUser();

  const getUserInfo = async () => {
    const fisrt_name = await AsyncStorage.getItem('first_name');
    const last_name = await AsyncStorage.getItem('last_name');
    const profile_picture = await AsyncStorage.getItem('profile_picture');
    setInitialFirstName(fisrt_name)
    setInitialLastName(last_name)
    setInitialProfilePicture(profile_picture)
  }

  const updateProfile = async () => {
    try{
        const token = await AsyncStorage.getItem('token');
        const user_id = await AsyncStorage.getItem('user_id');
        
        if(!newFirstName && !newLastName && !newProfilePicture){
          Alert.alert("You Didn't Change Any Thing")
        } else {
          // To change only what the user decided to change
          if(!newFirstName){
            setNewFirstName(initialFirstName)
          }
          if(!newLastName){
            setNewLastName(initialLastName)
          }
          if(!newProfilePicture){
            setNewProfilePicture(initialProfilePicture)
          }
    
          const respone = await fetch(`${constants.fetch_url}update_profile?id=${user_id}`, {
              method: 'POST',
              headers: {
                  'x-access-token': token,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  first_name: newFirstName,
                  last_name: newLastName,
                  picture: newProfilePicture
              })
          });
          const data = await respone.json();
          if(data.status === "200"){
            await AsyncStorage.setItem('first_name',newFirstName);
            await AsyncStorage.setItem('last_name',newLastName);
            await AsyncStorage.setItem('profile_picture',newProfilePicture);
            getUserInfo()
            Alert.alert(data.message)
          }
        }


        
    } catch (error) {
        console.log(error)
    } 
  }


  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user_id');
    await AsyncStorage.removeItem('first_name');
    await AsyncStorage.removeItem('last_name');
    await AsyncStorage.removeItem('profile_picture');
    setToken(null)
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
    <ScrollView>
      <View style={styles.container}>  
        <View style={styles.footer} >
          <UploadImage setState={setNewProfilePicture} />

          <TextInputField 
            label="First Name" 
            main_icon={require("../../assets/icons/icons8-name-48.png")}
            placeholder={`${initialFirstName}`}
            setState={setNewFirstName}
          />

          <TextInputField 
            label="Last Name" 
            main_icon={require("../../assets/icons/icons8-name-48.png")}
            placeholder={`${initialLastName}`}
            setState={setNewLastName}
          />

          {/* Update Profile Button */}
          <ButtonComponent 
            onPress={() => updateProfile() }
            touchable_style={styles.button}
            border_color="#FDBE3B"
            text_style={styles.textSign}
            text_color="#FFFFFF"
            text="Update Profile"
          />

          {/* Log Out Button */}
          <ButtonComponent 
            onPress={() => logOut()}
            touchable_style={styles.logout}
            border_color="red"
            text_style={styles.textSign}
            text_color="#FFFFFF"
            text="Log Out"
          />
        </View>
      </View>
      </ScrollView>
  );
}

export default AccountScreen;