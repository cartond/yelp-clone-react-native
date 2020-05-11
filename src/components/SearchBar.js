import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = ({term, onTermChange}) => {

  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        placeholder='Search'
        style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  iconStyle:{
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
