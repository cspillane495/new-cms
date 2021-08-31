import { FETCH_USERS } from '../../actions/types';

export const users = (state = [], action) => {
    switch(action.type){
        case FETCH_USERS:
            return action.payload;
        default:
            return state
    } 
}