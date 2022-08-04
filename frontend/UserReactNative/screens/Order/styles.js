import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      backgroundColor: '#ffffff',
      marginHorizontal: 10,
    },
    major_info: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 25,
      marginBottom: 25,
      fontSize: 25
    },
    description: {
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 15,
      padding: 15,
      borderBottomWidth: 8,
      borderBottomColor: '#FDBE3B'
    },
    order: {
      backgroundColor: '#FDBE3B',
      height: 50,
    },
    orderBtn: {
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
});

export default styles;