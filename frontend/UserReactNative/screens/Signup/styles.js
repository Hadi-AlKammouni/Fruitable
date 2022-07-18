import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDBE3B'
    },
    header: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    text_header: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FDBE3B',
        paddingBottom: 5
    },
    text_input: {
        flex: 1,
        paddingLeft: 10
    },
    signIn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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

    // SignupScreenThree
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop:30,
      marginBottom:15,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      marginTop:30,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});

export default styles;