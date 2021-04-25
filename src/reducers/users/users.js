import { FETCH_USER } from '../../actions/types';

export const users = (state = {}, action) => {
    switch(action.type){
        case FETCH_USER:
            return action.payload;
        default:
            return state
    } 
}