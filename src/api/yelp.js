import axios from 'axios';
import { YELP_API_KEY } from 'react-native-dotenv'

// Move key into environmental variables. 
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  }
});
