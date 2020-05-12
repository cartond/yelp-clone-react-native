import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        data={restaurants}
        keyExtractor={ (restaurant) => restaurant.id }
        renderItem={ ({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default RestaurantList