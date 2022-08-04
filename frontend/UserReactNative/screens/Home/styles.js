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
    cardScrollView: {
        position:'absolute',
        bottom:10,
        left:10,
        right:0,
        paddingVertical:8
    },
    cardView: {
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
    cardImage: {
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
    cardInnerView: {
        borderRadius:15
    },
    viewGroceryText: {
        fontWeight: 'bold',
        fontSize: 12,
        color:'#FDBE3B'
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
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDBE3B',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 3
    },
    accountIcon: {
        position: 'absolute',
        left: 16
    },
    trackIcon: {
        position: 'absolute',
        left: 60
    },
    cartIcon: {
        position: 'absolute',
        right: 16
    },
    quantityView: {
        position: 'absolute',
        right: 24,
        top: -1,
    },
    quantityText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
  });

export default styles;