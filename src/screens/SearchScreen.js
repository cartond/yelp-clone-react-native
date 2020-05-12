import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useRestaurants from '../hooks/useRestaurants'

import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, error] = useRestaurants(); 

  const filterResultsByPrice = (price) => {
    // price == '$' || '$$' || '$$$'
    return restaurants.filter(restaurant => {
      return restaurant.price === price
    })
  };
 
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {(
        !!error && 
        <Text style={styles.errors}>Error: {error}</Text>
      )}

      <RestaurantList title='Cost Effective' restaurants={filterResultsByPrice('$')} />
      <RestaurantList title='Bit More' restaurants={filterResultsByPrice('$$')} />
      <RestaurantList title='Big Money' restaurants={filterResultsByPrice('$$$')} />
      <RestaurantList title='Date Night' restaurants={filterResultsByPrice('$$$$')} />
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: 'white'
  },
  errors:{
    color: 'red'
  }
});

export default SearchScreen;
