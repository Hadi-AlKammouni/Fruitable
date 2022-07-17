import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import TextInputField from '../../components/TextInputField';

const LoginScreen = ({navigation}) => {

  const [data,setdata] = React.useState({
    email: '',
    password: '',
    check_text_input_change: false,
    secureTextEntry: false,
  })

  const passwordInputChange = (val) => {
    if( val.length !== 0){
      setdata({
        ...data,
        password: val,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setdata({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
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
        />

        {/* Password Field */}
       <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Image 
           source={require("../../assets/icons/icons8-lock-32.png")}
            resizeMode='contain'
            style={{width:35,height:35}}
          />
          <TextInput 
            placeholder='Enter Your Password' 
            style={styles.text_input}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? false : true}
            onChangeText={(val) => passwordInputChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
            <Image 
              source={require("../../assets/icons/icons8-eye-32.png")}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            :
            <Image 
              source={require("../../assets/icons/icons8-closed-eye-32.png")}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            }  
          </TouchableOpacity>
        </View>

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