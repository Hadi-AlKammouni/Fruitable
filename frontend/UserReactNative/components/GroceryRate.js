import React, {useState} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const GroceryRate = () => {

    const [defaultRating, setDefaultRating] = useState(4)
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])

    return (
      <View style={styles.rating}> 
        <Text style={styles.txt_rating}>
            {defaultRating + ' / ' + maxRating.length}
        </Text>
        {maxRating.map((item, key) => {
          return (
            <View  key={item} onPress={() => setDefaultRating(item)}>
              <Image style={styles.img_rating} source={item <= defaultRating ? require("../assets/icons/icons8-star-488.png") : require("../assets/icons/icons8-star-48.png")}/>
            </View>
        )})}
      </View>
    );
}

const styles = StyleSheet.create({
  rating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25
  },
  img_rating: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  txt_rating: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 23,
    marginTop: 4,
    marginRight: 15 
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    padding: 15,
    backgroundColor: 'red'
  }
});

export default GroceryRate;