import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from "react-native";

const ViewCart = (props) => {

    const renderItem = ({ item, index })  =>{  
        return(
            <>
               <View key={index} style={styles.item}>
                    <Text style={styles.item_body}>
                        <Text style={styles.item_name}>{item.name}</Text>
                        <Text style={styles.item_price}>{"\n"}{"\n"}LBP {item.price} - {item.qauntity} Kg</Text>
                    </Text>
                    <Image style={styles.item_img} source={{uri: item.picture}}/>
                    <Image style={styles.remove_item} source={require("../assets/icons/remove.png")}/>
                </View>
            </>
        )
    }

    const separator = () => {
        return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
    }

    return(
        <SafeAreaView style={styles.contaner}>
            <FlatList 
                data={props.items.items} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
        </SafeAreaView>
    )
}

export default ViewCart;

const styles = StyleSheet.create ({
    contaner: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
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
        fontSize: 20
    },
    item_price: {
        fontSize: 16,
    },
    remove_item: {
        width: 40,
        height: 40
    },
    message: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 200,
    },
    price:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 40
    }
})