import { StyleSheet } from 'react-native';

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
    text_sign: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    logout: {
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: "red",
      height: 50,
      borderRadius:15
    },
    header: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FDBE3B',
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 26,
        letterSpacing: 3
    },
    back_icon: {
      position: 'absolute',
      left: 16
    },
});

export default styles;