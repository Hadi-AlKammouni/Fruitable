import React from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from './styles';

const HomeScreen = ( {navigation} ) => {

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.container}
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
          <Callout tooltip onPress={()=>navigation.navigate('Grocery')}>
            <View>
              <View style={styles.marker_tooltip}>
                <Text style={styles.marker_title}>GROCERY ONE</Text>
                <Text>A SHORT DESCRIPTION</Text>
                {/* <Image 
                  style={{width:120, height:80}} 
                  source={require("../assets/icons/icons8-home-100.png")}
                /> */}
              </View>
              <View style={styles.arrow_border}/>
              <View style={styles.arrow}/>
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