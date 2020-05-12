import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [error, setError] = useState('');
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([])

  const searchApi = async() => {
    try {
      const response = await yelp.get('/search', {
        params:{
          limit: 50,
          term,
          location: 'greenville'
        }
      });
      setError('')
      setRestaurants(response.data.businesses);
    } catch (e) {
      console.log(e)
      setError('Something went wrong!')
    }
  }

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={searchApi}
      />
      {(
        !!error && 
        <Text style={styles.errors}>Error: {error}</Text>
      )}
      <Text>Searching for {term}</Text>
      <Text>We have found {restaurants.length} restaurants</Text>
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
