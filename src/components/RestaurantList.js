import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail'

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={ (restaurant) => restaurant.id }
        renderItem={ ({ item }) => {
          return <RestaurantsDetail restaurant={item}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
});

export default RestaurantList