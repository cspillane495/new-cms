import { FETCH_USERS, FETCH_LOADING } from './types';
import request from '../utils/request';

export const fetchUsers = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true });

    const res = await request('/users');

    dispatch({ type: FETCH_USERS, payload: res.data.users })
    dispatch({ type: FETCH_LOADING, payload: false });
}