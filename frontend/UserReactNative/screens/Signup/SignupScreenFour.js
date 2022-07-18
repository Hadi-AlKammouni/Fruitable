import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StatusBar, ToastAndroid, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Avatar, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';

const SignupScreenFour = ({ navigation }) => {

    const [picture,setPicture] = useState(null);

    const setToastMessage = msg => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }

    const uploadImage = () => {
        let options = {
            mediaType: 'Images',
            quality: 1,
            base64: true 
        }

        ImagePicker.launchImageLibraryAsync(options, response => {
            if(response.didCancel){
                setToastMessage('Cancelled image selection')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.errorCode == 'permission'){
                setToastMessage('Permission not satisfied')
            } else if (response.errorCode == 'others'){
                setToastMessage(response.errorMessage)
            } else if(response.assets[0].fileSize > 2097152){
                Alert.alert('Maximum image size exceeded','Please choose image under 2 MB',[{text
                : 'OK'}],)
            }else {
                setPicture(response.assets[0].uri)   
            }
        });
    }

    const removeImage = () => {
        setPicture('')
        setToastMessage('Image removed');
    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Create Account</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <View>
                <View style={styles.center}>
                    <TouchableHighlight 
                        onPress={() => alert("Pressed")}
                        underlayColor='rgba(0,0,0,0)'>
                        <Avatar.Image
                            size={250}
                            source={{uri: 'data:image/png;base64,' + picture}}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.center}>
                     <Button mode='contained' onPress={() => uploadImage()}>
                        Upload Image
                    </Button>
                    <Button mode='contained' onPress={() => removeImage()}>
                        Remove Image
                    </Button>
                </View>
            </View>

            {/* Continue Button */}
            <ButtonComponent 
              onPress={() => navigation.navigate("UserScreen") }
              touchable_style={styles.button}
              border_color="#FDBE3B"
              text_style={styles.textSign}
              text_color="#FFFFFF"
              text="Create Account"
            />
          </Animatable.View>
        </View>
      );
}

export default SignupScreenFour;
