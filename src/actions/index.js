import { FETCH_ARTICLES, FETCH_LOADING } from './types';
import axios from 'axios';
const ROOT_URL = 'https://melodiousdin.com/api/v1';

export const fetchArticles = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await axios.get(`${ROOT_URL}/articles`)

    dispatch({ type: FETCH_ARTICLES, payload: res.data })
} 


