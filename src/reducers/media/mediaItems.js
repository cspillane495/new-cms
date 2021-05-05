import { FETCH_MEDIA_ITEMS } from '../../actions/types';

export const mediaItems = (state = [], action) => {
    switch(action.type){
        case FETCH_MEDIA_ITEMS:
            return action.payload;
        default:
            return state
    } 
}