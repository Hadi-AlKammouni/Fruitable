import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MapView, {Marker} from "react-native-maps";
import { useUser } from "../../context/user";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGrocery } from "../../context/grocery";
// import MapViewDirections from "react-native-maps-directions"; // ⚠This implementation needs api key⚠

const OrderTracking = () => {

    const {userLatitude,setUserLatitude,userLongitude,setUserLongitude} = useUser()
    const {groceryLatitude,groceryLongitude} = useGrocery()
    const mapRef = useRef()

    const getUserCoordinates = async () => {
        const userLatitude = await AsyncStorage.getItem('user_latitude');
        const userLongitude = await AsyncStorage.getItem('user_longitude');
        setUserLatitude(userLatitude)
        setUserLongitude(userLongitude)
    }

    useEffect(() => {
        getUserCoordinates()
    },[])

    return (
        <View style={styles.container}>

            <MapView 
                style={styles.container}
                ref={mapRef}
                initialRegion={{
                    latitude: parseFloat(userLatitude),
                    longitude: parseFloat(userLongitude),
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                {/* User marker */}
                <Marker coordinate={{
                        latitude: parseFloat(userLatitude),
                        longitude: parseFloat(userLongitude),
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                />

                {/* Grocery marker */}
                <Marker coordinate={{
                        latitude: parseFloat(groceryLatitude),
                        longitude: parseFloat(groceryLongitude),
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                />

                {/* ⚠This implementation needs api key⚠ */}
                {/* MapViewDirections is used to dipslay a line on the map between the origin(grocery coordinates) and the destination(usser coordinates)*/}

                {/* <MapViewDirections
                        origin={{
                        latitude: parseFloat(groceryLatitude),
                        longitude: parseFloat(groceryLongitude),
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                    destination={{
                        latitude: parseFloat(userLatitude),
                        longitude: parseFloat(userLongitude),
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    optimizeWaypoints={true}
                    onReady={result => {
                        mapRef.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: 30,
                                bottom: 300,
                                left: 30,
                                top: 100
                            }
                        })
                    }}
                /> */}

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default OrderTracking;