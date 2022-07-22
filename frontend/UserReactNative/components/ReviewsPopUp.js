import React from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";

class ReviewsPopUp extends React.Component{

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    render () {
        console.log(this.props.grocery.reviews.length)
        return(
            <View style={styles.container}>
                <Button title="View Recent Reviews" style={styles.btn_color} color={"#000"} onPress={() => this.setState({show:true})} />
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.main_screen}>
                        <View style={styles.popup}>
                            {
                                this.props.grocery.reviews.length === 0 ? 
                                <Text style={styles.name}> No Reviws Yet </Text> 
                                :
                                this.props.grocery.reviews.map((item, key) => {
                                    return (
                                        <>
                                        <Text key={key} style={styles.name}> {item.first_name}</Text>
                                        <Text style={styles.review}>{item.text}</Text>
                                        </>
                                )})
                            }
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
        backgroundColor:"#FDBE3B", 
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

export default ReviewsPopUp;