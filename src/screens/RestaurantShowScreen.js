import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => { 
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  };

  useEffect(()=>{
    getResult(id);
  }, [])

  return (
    <View>
      <Text>RestaurantShowScreen {id}</Text>
      {!result && (<Text>Loading......</Text>)}
      {!!result && (<Text>{result?.name}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default RestaurantShowScreen;
