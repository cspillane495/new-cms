import { FETCH_CURRENT_USER, FETCH_ARTICLES, FETCH_LOADING } from './types';
import axios from 'axios';

const ROOT_URL = 'https://melodiousdin.com/api/v1';

export const fetchCurrentUser = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });
    dispatch({ type: FETCH_CURRENT_USER, payload: {id: 1}});
    dispatch({ type: FETCH_LOADING, payload: false });    
}
export const userLogin = (values, history) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });
    
    const res = await axios.post(`${ROOT_URL}/users/login`, {
        user: values
    });

    dispatch({ type: FETCH_CURRENT_USER, payload: res.data.user});
    history.push(res.data.redirect)
    dispatch({type: FETCH_LOADING, payload: false})
}

export const fetchArticles = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await axios.get(`${ROOT_URL}/articles`)

    dispatch({ type: FETCH_ARTICLES, payload: res.data })
} 
