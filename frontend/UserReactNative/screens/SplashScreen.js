import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Animatable.Image animation="bounceIn" duration={3000} source={require('../assets/logo.png')} style={styles.logo} />
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                    <Text style={styles.textSign}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignupScreenOne')}>
                    <Text style={styles.textSign}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>

    </View>
  );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#FDBE3B"
    },
    header: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    text: {
        color: "grey",
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
    },
    textSign: {
        color: '#FDBE3B',
        fontWeight: 'bold',
        fontSize: 30
    }
})