import { FETCH_EPISODE } from '../../actions/types';

export const episode = (state = {}, action) => {
    switch(action.type) {
        case FETCH_EPISODE:
            return action.payload
        default: 
            return state
    }
}