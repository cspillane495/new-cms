import { FETCH_MEDIA_ITEMS, FETCH_LOADING } from './types';
import request from '../utils/request';

export const fetchMediaItems = () => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    const res = await request('/media')

    dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data.mediaItems })
    dispatch({ type: FETCH_LOADING, payload: false});
} 

export const uploadMediaItem = (values, history) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});
    const res = await request('/media', {
        method: 'post',
        data: values
    });
    
    history.push('/media')
    // dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data });
    dispatch({ type: FETCH_LOADING, payload: false});
} 

export const updateMediaItem = (values, id) => async dispatch => {
    dispatch({ type: FETCH_LOADING, payload: true});

    await request('/media/' + id, {
        method: 'put',
        data: values
    });

    // dispatch({ type: FETCH_MEDIA_ITEMS, payload: res.data.mediaItems })
    dispatch({ type: FETCH_LOADING, payload: false});
} 


