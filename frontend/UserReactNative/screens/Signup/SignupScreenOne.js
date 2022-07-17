import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import RadioButton from '../../components/RadioButton';

const SignupScreenOne = ({navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/* First Name Field */}
        <TextInputField 
          label="First Name" 
          main_icon={require("../../assets/icons/icons8-name-48.png")}
          placeholder="Enter Your First Name"
          helper_icon={require("../../assets/icons/icons8-checkmark-32.png")}
        />

        {/* Last Name Field */}
        <TextInputField
          label="Last Name" 
          main_icon={require("../../assets/icons/icons8-name-48.png")}
          placeholder="Enter Your Last Name"
          helper_icon={require("../../assets/icons/icons8-checkmark-32.png")}
          margin={30}
        />

        {/* Gender Radio Buttons */}
        <RadioButton />

        {/* Continue Button */}
        <ButtonComponent 
          onPress={() => navigation.navigate('SignupScreenTwo')}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />

        {/* Already a Member? Log In Button */}
        <ButtonComponent 
          onPress={() => navigation.navigate('LoginScreen')}
          touchable_style={styles.signIn}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FDBE3B"
          text="Already a Member? Log In"
        />
      </Animatable.View>
    </View>
  );
}

export default SignupScreenOne;