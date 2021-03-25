import axios from 'axios';
import {token} from '../../token.json';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: `Bearer ${token}`
    }
});