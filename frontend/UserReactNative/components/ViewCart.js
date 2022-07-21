import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from "react-native";

const ViewCart = () => {

    const data = [
        {name: 'Apple', price: '10500', qauntity: '0.5'}, 
        {name: 'Carrot', price: '20000', qauntity: '1'}, 
        {name: 'Lemon', price: '12000', qauntity: '1.5'}]

    const renderItem = ({ item, index })  =>{
        return(
            <>
                <View key={index} style={styles.item}>
                    
                    <Text style={styles.item_body}>
                        <Text style={styles.item_name}>
                            {item.name}
                        </Text>
                    </Text>
                    <View style={styles.img}>
                        <Image style={styles.item_img} source={require("../assets/logo.png")}/>
                    </View>
                    <View style={styles.img}>
                        <Image style={styles.remove_item} source={require("../assets/icons/remove.png")}/>
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
            <FlatList 
                data={data} 
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
    remove_item: {
        width: 40,
        height: 40
    },
})