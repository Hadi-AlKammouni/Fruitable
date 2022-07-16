import React from 'react';
import { Text, View, Image,TextInput } from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View >
      <View >
        <Text >Log in</Text>
      </View>
      <View >
        <Text >Email</Text>
        <View >
            <TextInput 
              placeholder='Enter Your Email' 
              autoCapitalize="none"
            />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;