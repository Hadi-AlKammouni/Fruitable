import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../screens/Login/styles';

const PasswordInputField = ({ label, main_icon, placeholder, helper_icon1, helper_icon2 }) => {

    const [data,setdata] = React.useState({
        password: '',
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
    <>
        <Text style={[styles.text_footer, {marginTop: 35}]}>{label}</Text>
        <View style={styles.action}>
          <Image 
              source={main_icon}
              resizeMode='contain'
              style={{width:35,height:35}}
          />
          <TextInput 
            placeholder={placeholder} 
            style={styles.text_input}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? false : true}
            onChangeText={(val) => passwordInputChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
            <Image 
              source={helper_icon1}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            :
            <Image 
              source={helper_icon2}
              resizeMode='contain'
              style={{width:35,height:35}}
            />
            }  
          </TouchableOpacity>
        </View>
    </>
  );
}


export default PasswordInputField;