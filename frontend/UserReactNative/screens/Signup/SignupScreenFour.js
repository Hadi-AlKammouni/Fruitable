import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, ToastAndroid, Image, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';

const SignupScreenFour = ({ navigation, route }) => {

    const [picture, setPicture] = useState(null);
    const [hasPermission,setHasPermission] = useState(null);
    const { firstName, lastName, gender,email, password, confirmPassword, location} = route.params;

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestCameraPermissionsAsync()
            setHasPermission(galleryStatus.status === 'granted')
        })
    })

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })

        if (!result.cancelled){
            setPicture(result.uri)
        }

        if (hasPermission === false){
            return <Text>No access to Internal Storage</Text>
        }
    }

    const setToastMessage = msg => {
        ToastAndroid.showWithGravity(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }

    const removeImage = () => {
        if (picture === null){
        setToastMessage('No image to remove..');
        } else{
            setPicture(null)
            setToastMessage('Image removed');
        }
    }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FDBE3B' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Upload Profile</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <View>
                <View style={styles.center}>
                    <View >
                        {picture && <Image source={{uri: picture}} style={styles.img}/>}
                        <Button title='Pick Image' color={'#000'} style={styles.img_btn} onPress={() => pickImage()}/>
                    </View>
                    <View style={styles.img_btn}>
                        {picture !== null ? <Button title='Remove Image' color={'red'} onPress={() => removeImage()}/> : null}
                    </View>
                </View>
            </View>

            {/* Continue Button */}
            <ButtonComponent 
              onPress={() => navigation.navigate("UserScreen")}
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
