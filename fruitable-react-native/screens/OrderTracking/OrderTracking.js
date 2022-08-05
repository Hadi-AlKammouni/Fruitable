// ⚠This implementation needs google api key⚠ \\
// ⚠Whenever found, the feature will be work as supposed⚠\\
// =========================================================== \\

// import React, { useEffect, useRef, useState } from "react";
// import { View, StyleSheet, Platform, PermissionsAndroid } from "react-native";
// import MapView, {Marker} from "react-native-maps";
// import { useUser } from "../../context/user";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useGrocery } from "../../context/grocery";
// // import MapViewDirections from "react-native-maps-directions";
// // import {GOOGLE_MAPS_KEY} from '@env';
// // import Geolocation from 'react-native-geolocation-service';

// const OrderTracking = () => {

//     const {userLatitude,setUserLatitude,userLongitude,setUserLongitude} = useUser()
//     const {groceryLatitude,groceryLongitude} = useGrocery()
//     const [orderLatitude,setOrderLatitude] = useState()
//     const [orderLongitude,setOrderLongitude] = useState()
//     const mapRef = useRef()

//     const getUserCoordinates = async () => {
//         const userLatitude = await AsyncStorage.getItem('user_latitude');
//         const userLongitude = await AsyncStorage.getItem('user_longitude');
//         setUserLatitude(userLatitude)
//         setUserLongitude(userLongitude)
//         setOrderLatitude(groceryLatitude)
//         setOrderLongitude(groceryLongitude)
//     }

//     // const getCurrentLocation = async () => new Promise((resolve, reject) =>{
//     //     Geolocation.getCurrentPosition(
//     //         position => {
//     //             const cords = {
//     //                 latitude: position.coords.latitude,
//     //                 longitude: position.coords.longitude
//     //             }
//     //             resolve(cords)
//     //         },
//     //         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
//     //     )
//     // })

//     // const getLiveLocation = async () => {
//     //     const locPermissionDenied = await locationPermission()
//     //     if (locPermissionDenied) {
//     //         const {latitude, longitude} = await getCurrentLocation()
//     //         setOrderLatitude(latitude)
//     //         setOrderLongitude(longitude)
//     //     }
//     // }

//     // const locationPermission = async () => new Promise(async (resolve, reject) => {
//     //     if(Platform.OS === 'ios') {
//     //         try {
//     //             const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
//     //             if (permissionStatus === 'granted') {
//     //                 return resolve('granted')
//     //             }
//     //             reject('Permission not granted')
//     //         } catch (error) {
//     //             return reject(error)
//     //         }
//     //     }
//     //     return PermissionsAndroid.request(
//     //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     //     ).then((granted) => {
//     //         if(granted === PermissionsAndroid.RESULTS.GRANTED) {
//     //             resolve('granted')
//     //         }
//     //         return reject('Location Permission denied')
//     //     }).catch((error) => {
//     //         console.log('Ask location permission error: ',error)
//     //         return reject(error)
//     //     }
//     //     )
//     // })


//     useEffect(() => {
//         // getLiveLocation()
//         getUserCoordinates()
//     },[])

//     // // To get the new location after 4 sec
//     // useEffect(() => {
//     //     const interval = setInterval (() => {
//     //         getLiveLocation()
//     //     }, 4000)
//     //     return () => clearInterval(interval)
//     // })

//     return (
//         <View style={styles.container}>

//             <MapView 
//                 style={styles.container}
//                 ref={mapRef}
//                 initialRegion={{
//                     latitude: parseFloat(userLatitude),
//                     longitude: parseFloat(userLongitude),
//                     latitudeDelta: 0.09,
//                     longitudeDelta: 0.04
//                 }}
//             >
//                 {/* User marker */}
//                 <Marker coordinate={{
//                         latitude: parseFloat(userLatitude),
//                         longitude: parseFloat(userLongitude),
//                         latitudeDelta: 0.09,
//                         longitudeDelta: 0.04
//                     }}
//                 />

//                 {/* Order marker */}
//                 <Marker coordinate={{
//                         latitude: parseFloat(orderLatitude),
//                         longitude: parseFloat(orderLongitude),
//                         latitudeDelta: 0.09,
//                         longitudeDelta: 0.04
//                     }}
//                 />

//                 {/* MapViewDirections is used to dipslay a line on the map between:
//                 the origin(grocery coordinates) and the destination(usser coordinates)*/}

//                 {/* <MapViewDirections
//                         origin={{
//                         latitude: parseFloat(groceryLatitude),
//                         longitude: parseFloat(groceryLongitude),
//                         latitudeDelta: 0.09,
//                         longitudeDelta: 0.04
//                     }}
//                     destination={{
//                         latitude: parseFloat(userLatitude),
//                         longitude: parseFloat(userLongitude),
//                         latitudeDelta: 0.09,
//                         longitudeDelta: 0.04
//                     }}
//                     apikey={GOOGLE_MAPS_KEY}
//                     strokeWidth={3}
//                     strokeColor="hotpink"
//                     optimizeWaypoints={true}
//                     onReady={result => {
//                         mapRef.current.fitToCoordinates(result.coordinates, {
//                             edgePadding: {
//                                 right: 30,
//                                 bottom: 300,
//                                 left: 30,
//                                 top: 100
//                             }
//                         })
//                     }}
//                 /> */}

//             </MapView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// })

// export default OrderTracking;