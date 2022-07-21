import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from "react-native";

const ViewItems = () => {

    const [category,setCategory] = useState("Fruits")
    const [items,setItems] = useState(data)

    const categories = [{category: "Fruits"}, {category: "Vegetables"}]
    const data = [
        {name: 'Apple',category: 'Fruits', price: '10500', qauntity: '0.5'}, 
        {name: 'Carrot', category: 'Vegetables', price: '20000', qauntity: '1'}, 
        {name: 'Lemon', category: 'Vegetables', price: '12000', qauntity: '1.5'}]

    const setStatusFilter = category => {
         if (category !== 'Fruits'){
            setItems([...data.filter(e => e.category === category)])
        } else if (category !== 'Vegetables'){
            setItems([...data.filter(e => e.category === category)])
        }
        setCategory(category)
    }

    const renderItem = ({ item, index })  =>{
        return(
            <>
                <View key={index} style={styles.item}>
                    <View style={styles.img}>
                        <Image style={styles.add_item} source={require("../assets/icons/icons8-add-32.png")}/>
                    </View>
                    <Text style={styles.item_body}>
                        <Text style={styles.item_name}>
                            {item.name}
                        </Text>
                    </Text>
                    <View style={styles.img}>
                        <Image style={styles.item_img} source={require("../assets/logo.png")}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.item_name}>
                        LBP {item.price} - {item.qauntity} Kg
                    </Text>
                </View>
            </>
        )
    }

    const separator = () => {
        return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
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
                data={items} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
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
    item_body: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    item_name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    add_item: {
        width: 40,
        height: 40
    },
})