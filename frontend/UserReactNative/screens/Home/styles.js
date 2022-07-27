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
        bottom:0,
        left:0,
        right:0,
        paddingVertical:5
    },
    cardView: {
        elevation:0,
        backgroundColor:'#FFF',
        borderRadius:10,
        marginHorizontal: 10,
        shadowColor:'#000',
        shadowRadius:5,
        shadowOpacity: 0.3,
        shadowOffset: {x:2,y:-2},
        height: 200,
        width: 200,
        overflow: 'hidden'
    },
    cardImage: {
        flex:3,
        // width:'100%',
        // height:'100%',
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
        // justifyContent:'center',
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
    accountView: {
        height: '0%',
        zIndex: 1,
    },
    accountImg: {
        margin: '5%',
        marginTop: '10%',
        width:55,
        height:55
    },
    cartView: {
        height: '0%',
        zIndex: 1,
        flexDirection: 'row-reverse'
    },
    cartImg: {
        marginTop: '55%',
        margin: '3%',
        width:55,
        height:55
    }
  });

export default styles;