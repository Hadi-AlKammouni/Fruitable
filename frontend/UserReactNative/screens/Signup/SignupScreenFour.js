import React, {useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';
import UploadImage from '../../components/UploadImage';

const SignupScreenFour = ({ navigation, route }) => {

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
              onPress={() => navigation.navigate("UserScreen")}
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