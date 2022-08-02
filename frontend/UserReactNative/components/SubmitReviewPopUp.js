import React, {useState} from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import UserRate from "./UserRate";

const SubmitReviewPopUp = () => {

    const [show, setShow] = useState(false);

    return(
        <View style={styles.container}>
            <Button title="Submit Review" color={"#FDBE3B"} onPress={() => setShow(true)} />
            <Modal transparent={true} visible={show}>
                <View style={styles.main_screen}>
                    <View style={styles.popup}>
                        <UserRate setShow={setShow}/>
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