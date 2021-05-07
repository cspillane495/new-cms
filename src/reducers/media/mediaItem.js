import { FETCH_MEDIA_ITEM } from '../../actions/types';

export const mediaItem = (state = {}, action) => {
    switch(action.type){
        case FETCH_MEDIA_ITEM:
            return action.payload;
        default:
            return state
    } 
}