import React, {useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';
import UploadImage from '../../components/UploadImage';
import constants from '../../constants';
import {useUser} from '../../context/user';

const SignupScreenFour = ({ navigation, route }) => {
  
    const {
      setUserId,
      setUserFirstname, 
      setUserLastName, 
      setUserEmail, 
      setToken, 
      setUserGender, 
      setUserLocation, 
      setUserProfilePicture
    } = useUser()

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
                    location: location,
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
              setUserLocation(data.location) 
              setUserProfilePicture(data.profile_picture)
              navigation.navigate("UserScreen")
            }
        } catch (error) {
            console.log(error)
        } 
    }

    const [picture, setPicture] = useState(null);
    const { firstName, lastName, gender,email, password, confirmPassword, location} = route.params;

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Upload Profile</Text>
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

export default SignupScreenFour;