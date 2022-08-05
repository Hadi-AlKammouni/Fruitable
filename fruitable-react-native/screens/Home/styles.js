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
    card_scroll_view: {
        position:'absolute',
        bottom:10,
        left:10,
        right:0,
        paddingVertical:8
    },
    card_view: {
        elevation:90,
        backgroundColor:'#fff',
        borderRadius:10,
        marginHorizontal: 10,
        shadowColor:'#000',
        shadowRadius:5,
        shadowOpacity: 0.3,
        shadowOffset: {x:2,y:-2},
        height: 150,
        width: 200,
        overflow: 'hidden'
    },
    card_image: {
        flex:4,
    },
    title: {
        fontSize: 20, 
        fontWeight:'bold',
    },
    description: {
        fontSize:12,
        color:"#444"
    },
    card_inner_view: {
        borderRadius:15
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
    account: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDBE3B',
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 3
    },
    account_icon: {
        position: 'absolute',
        left: 16
    },
    // trackIcon: {
    //     position: 'absolute',
    //     left: 60
    // },
    cart_icon: {
        position: 'absolute',
        right: 16
    },
    quantity_view: {
        position: 'absolute',
        right: 24,
        top: -1,
    },
    quantity_text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
  });

export default styles;