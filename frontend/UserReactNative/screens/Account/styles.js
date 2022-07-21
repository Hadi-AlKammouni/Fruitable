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

export default styles;