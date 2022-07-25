import React, {useState} from "react";
import { View, Text, Modal, Button, StyleSheet, ScrollView } from "react-native";
import {useGrocery} from '../context/grocery';

const ReviewsPopUp = () => {

    const [show, setShow] = useState(false);
    
    const {
        groceryReviews
    } = useGrocery()

        return(
            <View style={styles.container}>
                <Button title="View Recent Reviews" style={styles.btn_color} color={"#000"} onPress={() => setShow(true)} />
                <Modal transparent={true} visible={show}>
                    <View style={styles.main_screen}>
                        <View style={styles.popup}>
                            {groceryReviews && groceryReviews?.length ?
                                groceryReviews.map((item, key) => {
                                    return (
                                        <View key={key}>
                                        <Text style={styles.name}> {item.first_name}</Text>
                                        <Text style={styles.review}>{item.text}</Text>
                                        </View>
                                )})
                                :
                                <Text style={styles.name}> No Reviews Yet </Text> 
                            }
                            <Button title="Close"  color={"#000"} onPress={() => setShow(false)} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
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