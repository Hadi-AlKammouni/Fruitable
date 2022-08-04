import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import PasswordInputField from '../../components/PasswordInputField';
import { showMessage } from "react-native-flash-message";

const SignupScreenTwo = ({navigation, route}) => {
  
  const { firstName, lastName, gender } = route.params;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image animation="bounceIn" duration={3000} source={require('../../assets/logo3.png')} style={styles.logo} />
        <Text style={styles.text_header}>Step Two</Text>
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

        {/* Confirm Password Field */}
        <PasswordInputField
          label="Confirm Password"
          main_icon={require("../../assets/icons/icons8-lock-32.png")}
          placeholder="Repeat Your Password"
          helper_icon1={require("../../assets/icons/icons8-eye-32.png")}
          helper_icon2={require("../../assets/icons/icons8-closed-eye-32.png")}
          setState={setConfirmPassword}
        />

        {/* Continue Button */}
        {(!email || !password || !confirmPassword) || (password !== confirmPassword) // Check if all fields are filled + if password fields are identical
        ? 
        <ButtonComponent 
          onPress={() => showMessage({
            message: "All fields are required.",
            type: "info",
          })}
          touchable_style={styles.disableButton}
          border_color="#AAA8A8"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />
        :
        <ButtonComponent 
          onPress={() => navigation.navigate('SignupScreenThree',{firstName,lastName,gender,email,password})}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />
        }

      </Animatable.View>
    </View>
  );
}

export default SignupScreenTwo;