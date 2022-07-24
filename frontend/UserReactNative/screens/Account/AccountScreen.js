import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UploadImage from '../../components/UploadImage';
import RootStackScreen from '../RootStackScreen';
import { useUser } from '../../context/user';

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

  const logOut = async () => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user_id');
    AsyncStorage.removeItem('first_name');
    AsyncStorage.removeItem('last_name');
    AsyncStorage.removeItem('profile_picture');
    setToken(null)
  }

  const rederFisrtName = (label) => {        
    return (
      <Text style={styles.label_first}> {label} </Text>
    );
  }

  const rederLastName = (label) => {        
    return (
      <Text style={styles.label_last}> {label} </Text>
    );
  }

  const firstNameChange = (val) => {
    if( val.length !== 0){
      setNewFirstName(val)
    } else{
      setNewFirstName(val)    
    }
  }

  const lastNameChange = (val) => {
    if( val.length !== 0){
      setNewLastName(val)
    } else{
      setNewLastName(val)    
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return (
      <View style={styles.container}>  
        <View style={styles.footer} >
          {console.log(initialProfilePicture)}
          <Image source={{uri: initialProfilePicture}} style={{width: 80, height:80}} />
          {/* <UploadImage setState={initialProfilePicture}/> */}

          {rederFisrtName("First Name")}
          <TextInput
            style={styles.text}
            placeholderStyle={styles.placeholderStyle}
            placeholder={`${initialFirstName}`}
            onChangeText={(val) => firstNameChange(val)}
            // onChange={item => {
            //   setFirstName(item.value);
            // }}
          />
          {rederLastName("Last Name")}
          <TextInput
            style={styles.text}
            placeholderStyle={styles.placeholderStyle}
            placeholder={`${initialLastName}`}
            onChangeText={(val) => lastNameChange(val)}
            // onChange={item => {
            //   setLastName(item.value);
            // }}
          />

          {/* Update Profile Button */}
          <ButtonComponent 
            onPress={() => alert("Update Profile") }
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
  );
}

export default AccountScreen;