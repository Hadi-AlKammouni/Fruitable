import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';
import PasswordInputField from '../../components/PasswordInputField';

const LoginScreen = ({navigation}) => {

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
        />

        {/* Password Field */}
        <PasswordInputField
        label="Password"
        main_icon={require("../../assets/icons/icons8-lock-32.png")}
        placeholder="Enter Your Password"
        helper_icon1={require("../../assets/icons/icons8-eye-32.png")}
        helper_icon2={require("../../assets/icons/icons8-closed-eye-32.png")}
        />

        {/* Login Button */}
        <View style={styles.button}>
          <Text style={styles.textSign}>Log in</Text>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
        onPress={() => navigation.navigate('SignupScreen')}
        style={[styles.signIn, {borderColor:'#FDBE3B',borderWidth: 1,marginTop: 30}]}
        >
          <Text style={[styles.textSign,{color:'#FDBE3B'}]}>
            Create Account
          </Text>
        </TouchableOpacity>
      
      </Animatable.View>
    </View>
  );
}

export default LoginScreen;