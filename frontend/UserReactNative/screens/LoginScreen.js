import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, StatusBar } from 'react-native';
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
            secureTextEntry={data.secureTextEntry ? false : true}
            onChangeText={(val) => passwordInputChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
            <Image 
              source={require("../assets/icons/icons8-eye-32.png")}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            :
            <Image 
              source={require("../assets/icons/icons8-closed-eye-32.png")}
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
    signIn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    button: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: "#FDBE3B",
        height: 50,
        borderRadius:15
    },
    textSign: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
  });