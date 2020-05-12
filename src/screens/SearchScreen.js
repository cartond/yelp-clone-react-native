import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([])

  const searchApi = async() => {
    const response = await yelp.get('/search', {
      params:{
        limit: 50,
        term,
        location: 'greenville'
      }
    });
    setRestaurants(response.data.businesses);
  }

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={searchApi}
      />
      <Text>Searching for {term}</Text>
      <Text>We have found {restaurants.length} restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: 'white'
  }
});

export default SearchScreen;
