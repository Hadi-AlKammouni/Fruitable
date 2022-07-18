import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    marker_tooltip: {
        flexDirection: "column", 
        alignSelf: "flex-start", 
        backgroundColor: "#ffffff", 
        borderRadius: 6, 
        borderColor: "#000000", 
        borderWidth: 0.5, 
        padding: 15
    },
    marker_title: {
        fontSize: 16,
        marginBottom: 5
    },
    arrow_border: {
        backgroundColor: "transparent", 
        borderColor: "transparent", 
        borderTopColor: "#ccc", 
        borderWidth: 16, 
        alignSelf: "center", 
        marginTop: -0.5
    },
    arrow: {
        backgroundColor: "transparent", 
        borderColor: "transparent", 
        borderTopColor: "#fff", 
        borderWidth: 16, 
        alignSelf: "center", 
        marginTop: -32
    },
    // text_footer: {
    //     fontSize: 18
    // },
    // action: {
    //     flexDirection: 'row',
    //     marginTop: 10,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#FDBE3B',
    //     paddingBottom: 5
    // },
    // text_input: {
    //     flex: 1,
    //     paddingLeft: 10
    // },
    // signIn: {
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10
    // },
    // button: {
    //     justifyContent:'center',
    //     alignItems: 'center',
    //     marginTop: 50,
    //     backgroundColor: "#FDBE3B",
    //     height: 50,
    //     borderRadius:15
    // },
    // textSign: {
    //     fontWeight: 'bold',
    //     fontSize: 18,
    //     color: 'white'
    // }
  });

export default styles;