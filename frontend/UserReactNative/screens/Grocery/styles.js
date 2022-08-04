import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      backgroundColor: '#ffffff',
    },
    picture: {
      height: 250
    },
    major_info: {
      fontSize:28,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 25,
      marginBottom: 25
    },
    description: {
      fontSize:18,
      textAlign: 'center'
    },
    review: {
      flexDirection:'row',
      marginTop:35,
      marginBottom:35,
    },
    header: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FDBE3B',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 26,
        letterSpacing: 3
    },
    backIcon: {
      position: 'absolute',
      left: 16
    },
    button: {
      height: 200
    },
    cart: {
      backgroundColor: '#FDBE3B',
      height: 50,
    },
    viewCart: {
      top: 10,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    activity: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: "center",
      zIndex: 1,
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.2)'
  },
});

export default styles;