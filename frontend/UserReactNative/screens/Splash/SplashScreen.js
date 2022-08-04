import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {

    const launchApp = async () => {
        const id = await AsyncStorage.getItem("user_id")
        if(!id){
            setTimeout(function(){
                navigation.navigate('LoginScreen')
            }, 3000);
        }   
    }

    useEffect(() => {
        launchApp();
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image animation="bounceIn" duration={3000} source={require('../../assets/logo3.png')} style={styles.logo} />
        </View>
    </View>
  );
}

export default SplashScreen;