import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { useGrocery } from '../context/grocery';
// import ReviewsPopUp from './ReviewsPopUp';

const GroceryRate = () => {

    const {
      groceryReviews,
    } = useGrocery()

    const [groceryRating, setGroceryRating] = useState()
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])
    var rating = 0;

    const calculateRating = async () => {
      try{
        groceryReviews.map((item, key) => {
          key={key}
          rating += item.rate;
        })
        const final_rating = (rating/groceryReviews.length) 
        setGroceryRating(final_rating.toFixed(0))
      } catch (error) {
        console.error(error)
      }
    }

    useEffect(() => {
      calculateRating();
    }, [groceryReviews]);

    return (
      <View style={styles.rating}> 
        {
          groceryRating === "NaN" ? 
          null 
          :
          <Text style={styles.txt_rating}> {groceryRating + ' / 5'} </Text>
        }
          
        {
          groceryRating === "NaN" ? 
          <Text style={styles.txt_rating}> No Ratings Yet </Text> 
          :
          maxRating.map((item, key) => {
            return (
              <View  item={item} key={key} onPress={() => setGroceryRating(item)}>
                <Image style={styles.img_rating} source={item <= groceryRating ? require("../assets/icons/icons8-star-488.png") : require("../assets/icons/icons8-star-48.png")}/>
              </View>
          )})
        }
        {/* <ReviewsPopUp/> */}
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
    resizeMode: 'cover',
    marginTop: 4
  },
  txt_rating: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 23,
    marginTop: 8,
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