import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../screens/Login/styles';

const TextInputField = ({ label, main_icon, placeholder, helper_icon, margin }) => {

    const [data,setdata] = React.useState({
        input: '',
        check_text_input_change: false,
    })
    
    const InputChange = (val) => {
        if( val.length !== 0){
          setdata({
            ...data,
            input: val,
            check_text_input_change: true
          })
        } else{
          setdata({
            ...data,
            input: val,
            check_text_input_change: false
            })    
        }
    }

  return (
    <>
    <Text style={[styles.text_footer, {marginTop:margin}]}>{label}</Text>
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
        onChangeText={(val) => InputChange(val)}
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