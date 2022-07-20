import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import TextInputField from './TextInputField';

const UserRate = () => {

  const [defaultRating, setDefaultRating] = useState(5)
  const [maxRating, setMaxRating] = useState([1,2,3,4,5])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.txt_rating}> Rate Your Experience </Text>
        <View style={styles.rating}> 
        <Text style={styles.txt_rating}>
            {defaultRating + ' / ' + maxRating.length}
        </Text>
            {maxRating.map((item, key) => {
            return (
                <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
                <Image style={styles.img_rating} source={item <= defaultRating ? require("../assets/icons/icons8-star-488.png") : require("../assets/icons/icons8-star-48.png")}/>
                </TouchableOpacity>
            )})}
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => alert(defaultRating)}>
            <Text style={styles.submit}>Submit Review</Text>
        </TouchableOpacity>

        <Text style={styles.txt_rating}> Write A Review </Text>
        <TextInputField 
          main_icon={require("../assets/icons/icons8-write-60.png")}
          placeholder="Review.."
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
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
  submit: {
    color: "#fff",
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#000'
  }

});

export default UserRate;