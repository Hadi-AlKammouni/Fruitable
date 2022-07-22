import React, {useEffect, useState} from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styles from './styles';
import constants from '../../constants';

const HomeScreen = ( {navigation} ) => {

  const [groceries, setGroceries] = useState([])

  const getGroceries = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}get_groceries`);
      const data = await response.json();
      setGroceries(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGroceries();
  }, []);

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
        {groceries.map((item, key) => {
          const id = item._id
          return(
          <Marker 
          coordinate={{latitude: item.latitude, longitude: item.longitude}}
          title="{item.name}"
          description="{item.description}"
          key={key}
          >
            <Callout tooltip onPress={()=>navigation.navigate('Grocery',id)}>
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