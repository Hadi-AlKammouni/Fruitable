import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const AccountScreen = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const rederFisrtName = (label) => {        
    return (
      <Text style={styles.label_first}> {label} </Text>
    );
  }

  const rederLastName = (label) => {        
    return (
      <Text style={styles.label_last}> {label} </Text>
    );
  }

  const firstNameChange = (val) => {
    if( val.length !== 0){
      setFirstName(val)
    } else{
      setFirstName(val)    
    }
  }

  const lastNameChange = (val) => {
    if( val.length !== 0){
      setLastName(val)
    } else{
      setLastName(val)    
    }
  }
  
  return (
      <View style={styles.container}>  
        <View style={styles.footer} >
          {rederFisrtName("First Name")}
          <TextInput
            style={styles.text}
            placeholderStyle={styles.placeholderStyle}
            placeholder={'First Name'}
            onChangeText={(val) => firstNameChange(val)}
            onChange={item => {
              setFirstName(item.value);
            }}
          />
          {rederLastName("Last Name")}
          <TextInput
            style={styles.text}
            placeholderStyle={styles.placeholderStyle}
            placeholder={'Last Name'}
            onChangeText={(val) => lastNameChange(val)}
            onChange={item => {
              setLastName(item.value);
            }}
          />

          {/* Update Profile Button */}
          <ButtonComponent 
            onPress={() => alert("Update Profile") }
            touchable_style={styles.button}
            border_color="#FDBE3B"
            text_style={styles.textSign}
            text_color="#FFFFFF"
            text="Update Profile"
          />
          {/* Log Out Button */}
          <ButtonComponent 
            onPress={() => alert("Log Out") }
            touchable_style={styles.logout}
            border_color="red"
            text_style={styles.textSign}
            text_color="#FFFFFF"
            text="Log Out"
          />
        </View>
      </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
      flex: 3,
      backgroundColor: "#ffffff",
      paddingVertical: 20,
      paddingHorizontal: 30
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
  },
  text: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop:30,
    marginBottom:15,
  },
  label_first: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 40,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    marginTop:30,
  },
  label_last: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 40,
    top: 100,
    zIndex: 999,
    paddingHorizontal: 8,
    marginTop:30,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  logout: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: "red",
    height: 50,
    borderRadius:15
  }
});