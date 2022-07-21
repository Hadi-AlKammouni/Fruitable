import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from "react-native";

const ViewItems = () => {

    const [category,setCategory] = useState("Fruits")

    const categories = [{category: "Fruits"}, {category: "Vegetables"}]
    const data = [{name: 'Apple',category: 'Fruits'}, {name: 'Carrot', category: 'Vegetables'}, {name: 'Lemon', category: 'Vegetables'}]

    const setStatusFilter = category => {
        setCategory(category)
    }

    const renderItem = ({ item, index })  =>{
        return(
            <View key={index} style={styles.item}>
                <View style={styles.img}>
                    <Image style={styles.item_img} source={require("../assets/logo.png")}/>
                </View>
                <Text style={styles.itemBody}>
                    <Text style={styles.itemName}>
                        {item.name}
                    </Text>
                </Text>
            </View>
        )
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
            <FlatList 
                data={data} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
            />
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
    item: {
        flexDirection: 'row',
        padding: 15
    },
    img: {
        padding: 10 
    },
    item_img: {
        width: 80,
        height: 80
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16
    },
})