import React, {useState} from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';
import ButtonComponent from '../../components/ButtonComponent';
import constants from '../../constants';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('')   
  const [password, setPassword] = useState('')   

  const LogIn = async () => {
    try{
        const respone = await fetch(`${constants.fetch_url}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        const data = await respone.json();

    } catch (error) {
        console.log(error)
    } 
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Log in</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/* Email Field */}
        <TextInputField 
          label="Email" 
          main_icon={require("../../assets/icons/icons8-mail-account-32.png")}
          placeholder="Enter Your Email"
          helper_icon={require("../../assets/icons/icons8-checkmark-32.png")}
          setState={setEmail}
        />

        {/* Password Field */}
        <PasswordInputField
        label="Password"
          main_icon={require("../../assets/icons/icons8-lock-32.png")}
          placeholder="Enter Your Password"
          helper_icon1={require("../../assets/icons/icons8-eye-32.png")}
          helper_icon2={require("../../assets/icons/icons8-closed-eye-32.png")}
          setState={setPassword}
        />

        {/* Log In Button */}
        <ButtonComponent 
          onPress={() => LogIn()}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Log In"
        />

        {/* Create Account Button */}
        <ButtonComponent 
          onPress={() => navigation.navigate('SignupScreenOne')}
          touchable_style={styles.signIn}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="Create Account"
        />
      </Animatable.View>
    </View>
  );
}

export default LoginScreen;