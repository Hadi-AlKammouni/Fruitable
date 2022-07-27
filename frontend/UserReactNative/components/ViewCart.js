import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from "react-native";

const ViewCart = (props) => {

    let total_price = 0;
    props.items.items && props.items.items.map(item => ( total_price += item.price ))
    
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
                        <Image style={styles.item_img} source={{uri: item.picture}}/>
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
            {total_price === 0 ? 
            <View><Text style={styles.message}> You Didn't Pick Any Item Yet, Choose Grocery Then Add Items to Your cart</Text></View>
            :
            <>
            <FlatList 
                data={props.items.items} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
            <Text style={styles.price}>Total Price: LBP {total_price} </Text> 
            </>
            }
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