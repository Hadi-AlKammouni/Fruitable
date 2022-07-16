import { Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
  return (
    <View >

        <View >
            <Animatable.Image animation="bounceIn" duration={3000} source={require('../assets/logo.png')} />
        </View>

        <Animatable.View animation="fadeInUpBig" >
            <View >
                <TouchableOpacity onPress={()=>alert('Clicked')}>
                    <Text >Log in</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={()=>alert('Clicked')}>
                    <Text >Create Account</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>

    </View>
  );
}

export default SplashScreen;