import { FETCH_CURRENT_USER, FETCH_LOADING } from './types';
import axios from 'axios';
import {setToken, getToken} from '../utils/authority';

const ROOT_URL = 'https://melodiousdin.com/api/v1';

export const fetchCurrentUser = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });
    const res = await axios.get(`${ROOT_URL}/users/current`, {
        headers: {
            Authorization: `Token ${getToken()}`,
        }
    });
    console.log(getToken())
    dispatch({ type: FETCH_CURRENT_USER, payload: res.data.user});
    dispatch({ type: FETCH_LOADING, payload: false });    
}
export const userLogin = (values, history) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });
    
    const res = await axios.post(`${ROOT_URL}/users/login`, {
        user: values
    });
    console.log(res.data)
    setToken(res.data.user.token)
    dispatch({ type: FETCH_CURRENT_USER, payload: res.data.user});
    history.push(res.data.redirect)
    dispatch({type: FETCH_LOADING, payload: false})
}

export const logout = (history) => async dispatch => {
    const res = {user: {active:false}}; 
    dispatch({ type: FETCH_CURRENT_USER, payload: res.user})
    setToken("")
    history.push('/login')
}

