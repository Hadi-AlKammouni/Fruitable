import React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({navigation}) => {

  const [data,setdata] = React.useState({
    email: '',
    password: '',
    check_text_input_change: false,
    secureTextEntry: false,
  })

  const emailInputChange = (val) => {
    if( val.length !== 0){
      setdata({
        ...data,
        email: val,
        check_text_input_change: true
      })
    } else{
      setdata({
        ...data,
        email: val,
        check_text_input_change: false
        })    
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Log in</Text>
      </View>

      {/* Email Field */}
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Image 
            source={require("../assets/icons/icons8-mail-account-32.png")}
            resizeMode='contain'
            style={{width:35,height:35}}
          />
          <TextInput 
            placeholder='Enter Your Email' 
            style={styles.text_input}
            autoCapitalize="none"
            onChangeText={(val) => emailInputChange(val)}
          />
          {data.check_text_input_change ?
          <Animatable.View animation="bounceIn">
            <Image 
              source={require("../assets/icons/icons8-checkmark-32.png")}
              resizeMode='contain'
              style={{width:25,height:35}}
            />
          </Animatable.View>
          : null}    
        </View>

       {/* Password Field */}
       <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
         <View style={styles.action}>
            <Image 
              source={require("../assets/icons/icons8-lock-32.png")}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            <TextInput 
              placeholder='Enter Your Password' 
              style={styles.text_input}
              autoCapitalize="none"
              secureTextEntry={true}
            />
         </View>

      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDBE3B'
    },
    header: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    text_header: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FDBE3B',
        paddingBottom: 5
    },
    text_input: {
        flex: 1,
        paddingLeft: 10
    },
    signin: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    textSign: {
        fontWeight: 'bold',
        fontSize: 18
    }
  });