import { useState, useEffect } from 'react';
import yelp from '../api/yelp'

export default () => {
  const [error, setError] = useState('');

  const [restaurants, setRestaurants] = useState([])

  const searchApi = async(searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params:{
          limit: 50,
          term: searchTerm,
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

  const fetch = async(id) => {
    try {
      const response = await yelp.get(`/${id}`, {
        params:{
          limit: 50,
          term: searchTerm,
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

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, restaurants, error];
}