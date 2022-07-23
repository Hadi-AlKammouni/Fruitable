import React from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import UserRate from "./UserRate";

class SubmitReviewPopUp extends React.Component{

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    render () {
        return(
            <View style={styles.container}>
                <Button title="Submit Review" style={styles.btn_color} color={"#FDBE3B"} onPress={() => this.setState({show:true})} />
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.main_screen}>
                        <View style={styles.popup}>
                        {this.props && null}
                            <UserRate grocery_id={this.props}/>
                            <Button title="Close"  color={"#000"} onPress={() => this.setState({show:false})} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:25
    },
    main_screen: {
        flex:1,
        backgroundColor:"#000000aa"
    },
    popup: {
        backgroundColor:"#fff", 
        margin:20, 
        padding:10, 
        borderRadius:10, 
        flex:1
    },
    name: {
        fontSize:20, 
        fontWeight: 'bold'
    },
    review: {
        fontSize:15,
        marginBottom: 15
    }
});

export default SubmitReviewPopUp;