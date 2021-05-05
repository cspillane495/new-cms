import { FETCH_MEDIA_ITEMS, FETCH_LOADING } from './types';
import axios from 'axios';
const ROOT_URL = 'http://localhost:8080/api/v1';

export const fetchMediaItems = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await axios.get(`${ROOT_URL}/media`)

    dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data })
} 

export const uploadMediaItem = (values) => async dispatch => {
    // dispatch({ type: FETCH_LOADING, payload: true});
    console.log(values)
    const res = await axios.post(`${ROOT_URL}/media/upload`, values);
    console.log(res)
    // dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data })
} 


