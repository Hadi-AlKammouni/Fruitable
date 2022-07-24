import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Text, Alert, ActivityIndicator } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from './styles';
import constants from '../../constants';
import {useGrocery} from '../../context/grocery';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ( {navigation} ) => {

  const [userLatitude,setUserLatitude] = useState(null)
  const [userLongitude,setUserLongitude] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [groceries, setGroceries] = useState([])
  const {
    setGroceryId,
  } = useGrocery()

  // To get user live location:
  // 1.If user give access to get his location, 
  // the groceries near him will appear on map, 
  // and the map will open as initial region at his location
  // 2.Else all groceries will appear on map, 
  // and the map will open as initial region at Beirut
  async function getLocation(){
    try{
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission not granted",
          "Allow the app to use location service.",
          [{text: "OK"}],
          {cancelable: false}
        )
      }
      let {coords} = await Location.getCurrentPositionAsync();
      if (coords) {
        const {latitude, longitude} = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        })
        let result = `lat: ${latitude} / long: ${longitude}`
        AsyncStorage.setItem('user_latitude',latitude.toString());
        AsyncStorage.setItem('user_longitude',longitude.toString());

        setUserLatitude(latitude)
        setUserLongitude(longitude)
        setIsLoading(false)
        getGroceries(true)
      }
    }catch(error){
      getGroceries(false)
      setIsLoading(false)
    }
  }

  // Funtion to get all groceries if user didn't give access to get his live location
  // Else it will give the near by groceries
  const getGroceries = async (state) => {
    try {
      if(state){
        const userId = await AsyncStorage.getItem('user_id');
        const userLatitude = await AsyncStorage.getItem('user_latitude');
        const userLongitude = await AsyncStorage.getItem('user_longitude');
    
        const response = await fetch(`${constants.fetch_url}find_nearby_groceries?id=${userId}`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            latitude: parseFloat(userLatitude),
            longitude: parseFloat(userLongitude)
          })
        });
        const data = await response.json();
        setGroceries(data)

      }else{
        const response = await fetch(`${constants.fetch_url}get_groceries`);
        const data = await response.json();
        setGroceries(data)
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading ?  
        <View style={styles.activity}>
          <ActivityIndicator size={50}/>
        </View>:
        null 
      }
        <MapView
        style={styles.container}
        initialRegion={{
          latitude: userLatitude ? parseFloat(userLatitude) : parseFloat(33.888630),
          longitude: userLongitude ? parseFloat(userLongitude) : parseFloat(35.495480),
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
        >  
        {groceries.map((item, key) => {
          var id = item._id
          // setGroceryId(item._id)
          return(
          <Marker 
          coordinate={{latitude: item.latitude, longitude: item.longitude}}
          title="{item.name}"
          description="{item.description}"
          key={key}
          >
            <Callout tooltip onPress={()=>{
                setGroceryId(id)
                navigation.navigate('Grocery')
            }
            }>
              <View>
                  <View style={styles.marker_tooltip}>
                    <Text style={styles.marker_title}>{item.name}</Text>
                    <Text>{item.description}</Text>
                  </View>
                <View style={styles.arrow_border}/>
                <View style={styles.arrow}/>
              </View>
            </Callout>
          </Marker>
        )})}

      </MapView>
    </SafeAreaView>
  );
}

export default HomeScreen;