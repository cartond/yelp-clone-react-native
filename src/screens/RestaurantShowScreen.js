import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => { 
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data)
    console.log(response.data)
    console.log(response.data.display_address)
  };

  const address = () => {
    if (!restaurant || !restaurant.location?.display_address) return null;

    return restaurant.location.display_address.map((addressLine) => {
      return <Text style={styles.address}>{addressLine}</Text>
    });
  }

  useEffect(()=>{
    getRestaurant(id);
  }, [])

  if (!restaurant){
    // err handling too
    return (<Text>Loading......</Text>)
  }

  return (
    <View>
      <View>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={true}// This is the default but a reminder it's here
          data={restaurant.photos}
          keyExtractor={ (photo) => photo }
          renderItem={ ({ item }) => {
            return (
              <Image source={{uri: item}} style={styles.image} />
            )
          }}
        />
        <Text style={styles.title}>{ restaurant.name }</Text>
        <Text style={styles.reviews}>{restaurant.rating} Stars out of {restaurant.review_count} Reviews</Text>
        <Text style={styles.description}>Know for { restaurant.categories.map((cat) => cat.title).join(', ') }</Text>
        <View style={styles.addresses}>
        {restaurant.location.display_address.map((addressLine) => {
          return <Text style={styles.address}>{addressLine}</Text>
        })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 400,
    height: 400,
    marginLeft: 10
  },
  title: {
    fontSize: 22,
    marginTop: 15,
    marginLeft: 10

  },
  reviews: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 10
  },
  description: {
    marginTop: 10,
    marginLeft: 10
  },
  addresses: {
    marginTop: 10,
    marginLeft: 10
  },
  address: {
  }
});

export default RestaurantShowScreen;
