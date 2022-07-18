import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

const SignupScreenFour = () => {

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Create Account</Text>
          </View>
        </View>
      );
}

export default SignupScreenFour;
