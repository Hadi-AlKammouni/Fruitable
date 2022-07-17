import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../Login/styles';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import PasswordInputField from '../../components/PasswordInputField';
import ConfirmPassword from '../../components/ConfirmPassword';

const SignupScreenTwo = ({navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/* Email Field */}
        <TextInputField 
          label="Email" 
          main_icon={require("../../assets/icons/icons8-mail-account-32.png")}
          placeholder="Enter Your Email"
          helper_icon={require("../../assets/icons/icons8-checkmark-32.png")}
        />

        {/* Password Field */}
        <PasswordInputField
          label="Password"
          main_icon={require("../../assets/icons/icons8-lock-32.png")}
          placeholder="Enter Your Password"
          helper_icon1={require("../../assets/icons/icons8-eye-32.png")}
          helper_icon2={require("../../assets/icons/icons8-closed-eye-32.png")}
        />

        {/* Confirm Password Field */}
        <ConfirmPassword
          label="Confirm Password"
          main_icon={require("../../assets/icons/icons8-lock-32.png")}
          placeholder="Repeat Your Password"
          helper_icon1={require("../../assets/icons/icons8-eye-32.png")}
          helper_icon2={require("../../assets/icons/icons8-closed-eye-32.png")}
        />

        {/* Continue Button */}
        <ButtonComponent 
          onPress={() => alert('Clicked')}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />
      </Animatable.View>
    </View>
  );
}

export default SignupScreenTwo;