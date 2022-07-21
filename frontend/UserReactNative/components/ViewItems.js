import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from "react-native";

const ViewItems = () => {

    const [category,setCategory] = useState("Fruits")

    const categories = [{category: "Fruits"}, {category: "Vegetables"}]

    const setStatusFilter = category => {
        setCategory(category)
    }

    return(
        <SafeAreaView style={styles.contaner}>
            <View style={styles.list_tab}>
                {
                    categories.map(e => (
                        <TouchableOpacity style={[styles.btn, category === e.category && styles.active_btn]} onPress={() => setStatusFilter(e.category)}>
                            <Text style={[styles.text, category === e.category && styles.active_text]}>
                            {e.category}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </SafeAreaView>
    )
}

export default ViewItems;

const styles = StyleSheet.create ({
    contaner: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    list_tab: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10
    },
    btn: {
        width: Dimensions.get("window").width / 3,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 15,
        padding: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16
    },
    active_btn: {
        backgroundColor: "#FDBE3B",
        borderWidth: 0,
    },
    active_text: {
        color: "#fff"
    },
})