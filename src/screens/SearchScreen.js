import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(val) => setTerm(val)} 
        onTermSubmit={()=>console.log('go fetch')}
      />
      <Text>Searching for {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: 'white'
  }
});

export default SearchScreen;
