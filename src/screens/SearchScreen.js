import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useRestaurants from '../hooks/useRestaurants'

import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';


const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, error] = useRestaurants(); 

  const filterResultsByPrice = (price) => {
    // price == '$' || '$$' || '$$$'
    return restaurants.filter(restaurant => {
      return restaurant.price === price
    })
  };
 
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {(
        !!error && 
        <Text style={styles.errors}>Error: {error}</Text>
      )}
      <ScrollView>
        <RestaurantList
          navigation={navigation}
          title='Cost Effective'
          restaurants={filterResultsByPrice('$')} />
        <RestaurantList
          navigation={navigation}
          title='Bit More'
          restaurants={filterResultsByPrice('$$')} />
        <RestaurantList
          navigation={navigation}
          title='Big Money'
          restaurants={filterResultsByPrice('$$$')} />
        <RestaurantList
          navigation={navigation}
          title='Date Night'
          restaurants={filterResultsByPrice('$$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1
  },
  errors:{
    color: 'red'
  }
});

export default SearchScreen;
