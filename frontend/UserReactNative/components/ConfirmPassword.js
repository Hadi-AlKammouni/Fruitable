import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../screens/Login/styles';

const ConfirmPassword = ({ label, main_icon, placeholder, helper_icon1, helper_icon2 }) => {

    const [data,setdata] = React.useState({
        confirm_password: '',
        confirm_secureTextEntry: false,
    })
    
    const confirmPasswordInputChange = (val) => {
        if( val.length !== 0){
          setdata({
            ...data,
            confirm_password: val,
          })
        }
    }
    
    const updateConfirmSecureTextEntry = () => {
        setdata({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
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
            secureTextEntry={data.confirm_secureTextEntry ? false : true}
            onChangeText={(val) => confirmPasswordInputChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ?
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


export default ConfirmPassword;