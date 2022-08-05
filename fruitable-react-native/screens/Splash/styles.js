import { Dimensions, StyleSheet } from 'react-native';
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
    logo: {
        width: height_logo,
        height: height_logo
    },
})

export default styles;