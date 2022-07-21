import React, { useEffect, useState } from 'react';
import { View, Text, ToastAndroid, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadImage = ({ setState }) => {

    const [picture, setPicture] = useState(null);
    const [hasPermission,setHasPermission] = useState(null);

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
            setState('data:image/png;base64,' + result.uri)
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
            setState(null)
            setToastMessage('Image removed');
        }
    }

    return (
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
      );
}

export default UploadImage;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    img: {
        borderRadius: 15,
        margin: 10,
        width:200, 
        height:200
    },
      img_btn: {
        margin: 10
    }
})