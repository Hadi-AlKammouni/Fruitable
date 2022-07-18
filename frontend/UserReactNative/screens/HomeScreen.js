import React from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

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
        >
          <Callout tooltip>
            <View>
            <View style={{
              flexDirection: "column", 
              alignSelf: "flex-start", 
              backgroundColor: "#ffffff", 
              borderRadius: 6, 
              borderColor: "#ccc", 
              borderWidth: 0.5, 
              padding: 15}}
            >
              <Text style={{fontSize: 16,marginBottom: 5}}>
                GROCERY ONE
              </Text>
              <Text>A SHORT DESCRIPTION</Text>
              {/* <Image 
                style={{width:120, height:80}} 
                source={require("../assets/icons/icons8-home-100.png")}
              /> */}
            </View>
            <View style={{backgroundColor: "transparent", borderColor: "transparent", borderTopColor: "#000", borderWidth: 16, alignSelf: "center", marginTop: -0.5}}/>
            <View style={{backgroundColor: "transparent", borderColor: "transparent", borderTopColor: "#fff", borderWidth: 16, alignSelf: "center", marginTop: -32}}/>
            </View>
            
          </Callout>
        </Marker>
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