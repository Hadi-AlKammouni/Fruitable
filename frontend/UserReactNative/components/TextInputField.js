import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../screens/Login/styles';

const TextInputField = ({ label, main_icon, placeholder, helper_icon }) => {

    const [data,setdata] = React.useState({
        email: '',
        check_text_input_change: false,
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
    <>
    <Text style={styles.text_footer}>{label}</Text>
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
        onChangeText={(val) => emailInputChange(val)}
      />
      {data.check_text_input_change ?
      <Animatable.View animation="bounceIn">
        <Image 
          source={helper_icon}
          resizeMode='contain'
          style={{width:25,height:35}}
        />
      </Animatable.View>
      : null}    
    </View>
    </>
  );
}


export default TextInputField;