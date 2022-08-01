import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, Modal, Button, Alert } from "react-native";
import constants from '../constants';
import { useGrocery } from "../context/grocery";
import { useUser } from "../context/user";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewItems = () => {

    const {
        groceryItems,
        groceryOrder,
        groceryId,
    } = useGrocery()

    const {userOrder,setUserOrder,token,setToken,setPickedItem,setCheckOrderIdRelativeToGrocery} = useUser()

    // const [category,setCategory] = useState('')
    const [fetchedItems,setFetchedItems] = useState([])
    const [items,setItems] = useState([])
    // const categories = ["Fruits", "Vegetables"]
    const elements = []
    // To show and hide item popup
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState({}) // To open the popup upon click

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

    // Pop up to veiw each item and add to order
    const ItemPopUp = ({item})=>{
        return (
            <View style={styles.item_container}>
                <Modal transparent={true} visible={show}>
                    <View style={styles.item_main_screen}>
                        <View style={styles.item_popup}>
                            <View style={{flex:1}}>
                                <Image style={styles.item_picture} source={{uri: item.picture}}/>
                                <Text style={styles.item_info}>{item.name}</Text>
                                <Text style={styles.item_price}>LBP {item.price} for {item.qauntity} Kg</Text>
                            </View>
                            <View style={styles.cart_button}>
                                <Button title="Add To Cart" color={"#FDBE3B"} 
                                    onPress={() => {
                                        if(!userOrder){
                                            isOrder(item.name,item.price,item.picture)
                                            setShow(false)
                                        }else{
                                            addToCart(item.name,item.price,item.picture) 
                                        addToCart(item.name,item.price,item.picture) 
                                            addToCart(item.name,item.price,item.picture) 
                                            setShow(false)
                                        }
                                        
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
                    <Text style={styles.item_body}>
                        <Text style={styles.item_name}>
                            {item.name}
                        </Text>
                        <Text style={styles.item_price}>
                            {"\n"}{"\n"}LBP {item.price} - {item.qauntity} Kg
                        </Text>
                    </Text>
                    <Image style={styles.item_img} source={{uri: item.picture}}/>
                </View>
            </TouchableOpacity>
        )
    }

    // Adding separator between items
    const separator = () => {
        return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
    }

    // Create order then add the item to it
    const isOrder = async (name,price,picture) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const user_id = await AsyncStorage.getItem('user_id');
            const username = await AsyncStorage.getItem('first_name');

            setToken(token)   

            const response = await fetch(`${constants.fetch_url}create_order`, {
                method: 'POST',
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user_id,
                    grocery: groceryId,
                    username: username
                })
            });

            const data = await response.json();

            if(data._id){
                const order = await AsyncStorage.setItem('order',data._id);
                setUserOrder(data._id)
                setCheckOrderIdRelativeToGrocery(groceryId)
                addToCart(name,price,picture)
            }

        } catch (error) {
          console.log(error);
        }
    };

    // Adding item to the recent order
    const addToCart = async (name,price,picture) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const order = await AsyncStorage.getItem('order');
            const response = await fetch(`${constants.fetch_url}add_to_order`, {
                method: 'POST',
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: order,
                    name: name,
                    price: price,
                    picture: picture,
                })
            });
            const data = await response.json();
            if(data.status === "200"){
                setPickedItem(true) // To show the cart icon in home screen
                Alert.alert(data.message)
            }
      
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        getItems();
    }, [groceryItems,groceryOrder])

    return(
        <View style={styles.container}>
            {/* <View style={styles.list_tab}>
                {
                    categories.map((e, key) => (
                        <TouchableOpacity key={key} style={[styles.btn, category === e && styles.active_btn]} onPress={() => setStatusFilter(e)}>
                            <Text style={[styles.text, category === e && styles.active_text]}>
                            {e}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View> */}
            <FlatList 
                data={items} 
                keyExtractor={(e, item) => item.toString()} 
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
            <ItemPopUp item={selectedItem}/>
        </View>
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
        flex: 1,
        flexDirection: 'row',
        padding: 5
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
    add_item: {
        width: 40,
        height: 40
    },
    item_container: {
        flex:1,
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
    item_price: {
        fontSize: 20,
        marginTop: 30
    },
    cart_button: {
        // margin: 20
        marginTop: 20,
        marginBottom: 20
    },
})