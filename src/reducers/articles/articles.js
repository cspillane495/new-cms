import { FETCH_ARTICLES } from '../../actions/types';

export const articles = (state = [], action) => {
    switch(action.type){
        case FETCH_ARTICLES:
            return action.payload;
        default:
            return state
    } 
}