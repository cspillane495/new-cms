import { FETCH_MEDIA_ITEMS, FETCH_LOADING } from './types';
import axios from 'axios';
const ROOT_URL = 'https://melodiousdin.com/api/v1';

export const fetchMediaItems = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await axios.get(`${ROOT_URL}/media`)

    dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data })
} 

