import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <MapView
        style={{flex:1}}
        initialRegion={{
          latitude: parseFloat(33.888630),
          longitude: parseFloat(35.495480),
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >

        <Marker 
          coordinate={{latitude: 33.888630, longitude: 35.496}}
          title="Grocery 1"
          description="This is the first grocery" 
        />
        <Marker 
          coordinate={{latitude: 33.9, longitude: 35.496}}
          title="Grocery 2"
          description="This is the second grocery" 
        />

      </MapView>
    </SafeAreaView>
  );
}

export default HomeScreen;