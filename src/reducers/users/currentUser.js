import { FETCH_CURRENT_USER } from '../../actions/types';

export const currentUser = (state = {}, action) => {
    switch(action.type){
        case FETCH_CURRENT_USER:
            return action.payload;
        default:
            return state
    } 
}