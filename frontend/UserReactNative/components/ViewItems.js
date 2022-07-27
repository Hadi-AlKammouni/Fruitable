import React, { useState, useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Modal, Button } from "react-native";
import { LogBox } from "react-native";
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from "../context/grocery";
import { useUser } from "../context/user";

const ViewItems = () => {

    const {
        groceryId,
        groceryItems,
        groceryOrder,setGroceryOrder
    } = useGrocery()
    const {userOrder,token} = useUser()

    const [category,setCategory] = useState('')
    const [fetchedItems,setFetchedItems] = useState([])
    const [items,setItems] = useState([])
    const categories = ["Fruits", "Vegetables"]
    const elements = []
    // const [order,setOrder] = useState(false) // After creating order, the user is able to pick items
    // To show and hide item popup
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})

    // Get items of specific grocery
    const getItems = async () => {
        try{
            for (const item in groceryItems) {
                const response = await fetch(`${constants.fetch_url}get_item?id=${groceryItems[item]}`);
                const result = await response.json();
                elements.push(result)
            }
            setFetchedItems(elements)
            setItems(elements)
        } catch (error) {
          console.error(error)
        }
    }

    // // Filter upon switching categories
    // const setStatusFilter = category => {
    //      if (category !== 'Fruits'){
    //         setItems([...fetchedItems.filter(e => e.category === category)])
    //     } else if (category !== 'Vegetables'){
    //         setItems([...fetchedItems.filter(e => e.category === category)])
    //     }
    //     setCategory(category)
    // }

    const ItemPopUp = ({item})=>{
        return (
            <View style={styles.item_container}>
                <Modal transparent={true} visible={show}>
                    <View style={styles.item_main_screen}>
                        <View style={styles.item_popup}>
                            <Image style={styles.item_picture} source={{uri: item.picture}}/>
                            <Text style={styles.item_info}>{item.name}</Text>
                            <Text style={styles.item_info}>LBP {item.price} for {item.qauntity} Kg</Text>
                            <View style={styles.cart_button}>
                                <Button title="Add To Cart" color={"#FDBE3B"} 
                                    onPress={() => {
                                        addToCart(item.name,item.price,item.picture) 
                                        // setShow(false)
                                    }} />
                            </View>
                            <Button title="Close" color={"#000"} onPress={() => setShow(false)} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    // Displaying items for specific category
    const renderItem = ({ item, index })  =>{
        const handleOpen = () =>{
            setSelectedItem(item)
            setShow(true)
        }
        return(
            <TouchableOpacity onPress={handleOpen}>
                <View key={index} style={styles.item} >
                    {/* {order ? 
                    <View style={styles.img}>
                        <TouchableOpacity onPress={()=> addToCart(item.name,item.price,item.picture)}> 
                                                    */}
                            {/* <Image style={styles.add_item} source={require("../assets/icons/icons8-add-32.png")} /> */}
                        {/* </TouchableOpacity>

                    </View>
                    :
                    null
                    } */}
                    <Text style={styles.item_body}>
                        <Text style={styles.item_name}>
                            {item.name}
                        </Text>
                    </Text>
                    <View style={styles.img}>
                        <Image style={styles.item_img} source={{uri: item.picture}}/>
                    </View>
                </View>
                <View>
                    <Text style={styles.item_name}>
                        LBP {item.price} - {item.qauntity} Kg
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    // Adding separator between items
    const separator = () => {
        return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
    }

    // Adding item to order
    const addToCart = async (name,price,picture) => {
        try {
            const response = await fetch(`${constants.fetch_url}add_to_order`, {
                method: 'POST',
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: userOrder,
                    name: name,
                    price: price,
                    picture: picture
                })
            });
            const data = await response.json();
            if(data.status === "200"){
                alert(data.message)
            }
      
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
        getItems();
    }, [groceryItems,groceryOrder])

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.list_tab}>
                {/* {
                    categories.map((e, key) => (
                        <TouchableOpacity key={key} style={[styles.btn, category === e && styles.active_btn]} onPress={() => setStatusFilter(e)}>
                            <Text style={[styles.text, category === e && styles.active_text]}>
                            {e}
                            </Text>
                        </TouchableOpacity>
                    ))
                } */}
            </View>
            {/* <TouchableOpacity style={styles.create_btn} onPress={() => createOrder()}>
                    <Text style={[styles.text,styles.active_text]}>
                        Create New Order            
                    </Text>
            </TouchableOpacity> */}
            <FlatList 
                data={items} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
            <ItemPopUp item={selectedItem}/>
        </SafeAreaView>
    )
}

export default ViewItems;

const styles = StyleSheet.create ({
    container: {
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
    create_btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#000"
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
    item_container: {
        flex:1,
        marginTop:25
    },
    item_main_screen: {
        flex:1,
        backgroundColor:"#000000aa"
    },
    item_popup: {
        backgroundColor:"#fff", 
        margin:20, 
        padding:10, 
        borderRadius:10, 
        flex:1
    },
    item_picture: {
        height: 250,
    },
    item_info: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 40
    },
    cart_button: {
        margin: 20
    }
})