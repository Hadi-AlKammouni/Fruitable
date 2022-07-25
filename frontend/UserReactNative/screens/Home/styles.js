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
        paddingVertical:10
    },
    cardView: {
        elevation:2,
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
        width:'100%',
        height:'100%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 12, 
        fontWeight:'bold'
    },
    description: {
        fontSize:12,
        color:"#444"
    },
    cardInnerView: {
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:15
    },
    viewGroceryButton: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor:'#FDBE3B',
        borderWidth:1
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
    }
  });

export default styles;