import { FETCH_MEDIA_ITEMS, FETCH_LOADING } from './types';
import request from '../utils/request';

export const fetchMediaItems = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await request('/media')

    dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data.mediaItems })
} 

export const uploadMediaItem = (values) => async dispatch => {
    // dispatch({ type: FETCH_LOADING, payload: true});
    // console.log(values)
    const res = await request('/media', {
        method: 'post',
        data: values
    });
    console.log(res)
    // dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data })
} 


