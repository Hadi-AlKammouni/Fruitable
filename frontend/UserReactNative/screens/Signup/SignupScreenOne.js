import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';
import ButtonComponent from '../../components/ButtonComponent';
import RadioButton from '../../components/RadioButton';

const SignupScreenOne = ({navigation}) => {

  const [firstName, setFirstName] = useState('')   
  const [lastName, setLastName] = useState('')   
  const [gender, setGender] = useState('male')   

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
          setState={setFirstName}
        />

        {/* Last Name Field */}
        <TextInputField
          label="Last Name" 
          main_icon={require("../../assets/icons/icons8-name-48.png")}
          placeholder="Enter Your Last Name"
          helper_icon={require("../../assets/icons/icons8-checkmark-32.png")}
          margin={30}
          setState={setLastName}
        />

        {/* Gender Radio Buttons */}
        <RadioButton setState={setGender}/>

        {/* Continue Button */}
        {(!firstName || !lastName) ? 
        <ButtonComponent 
          onPress={() => alert("All Fields Are Required.")}
          touchable_style={styles.disableButton}
          border_color="#AAA8A8"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />
        :
        <ButtonComponent 
          onPress={() => navigation.navigate('SignupScreenTwo',{firstName,lastName,gender})}
          touchable_style={styles.button}
          border_color="#FDBE3B"
          text_style={styles.textSign}
          text_color="#FFFFFF"
          text="Continue"
        />
        }
      
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