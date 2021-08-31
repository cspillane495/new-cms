import {combineReducers} from 'redux';
import {loading} from './utils';
import {users, currentUser} from './users';
import {mediaItems, mediaItem} from './media';
import { episode, episodes } from './episodes';

export default combineReducers({
    loading,
    users,
    currentUser,
    mediaItems,
    mediaItem,
    episode, 
    episodes
})