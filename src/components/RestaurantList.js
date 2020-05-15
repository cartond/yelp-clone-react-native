import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail'
import { withNavigation } from 'react-navigation'
const RestaurantList = ({ title, restaurants, navigation }) => {
  if(!restaurants.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={ (restaurant) => restaurant.id }
        renderItem={ ({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('RestaurantShow', { id: item.id })}
            >
              <RestaurantsDetail restaurant={item}/>
            </TouchableOpacity>
          )
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

export default withNavigation(RestaurantList)