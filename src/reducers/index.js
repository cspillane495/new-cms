import {combineReducers} from 'redux';
import {loading} from './utils';
import {users, currentUser} from './users';
import {mediaItems, mediaItem} from './media';

export default combineReducers({
    loading,
    users,
    currentUser,
    mediaItems,
    mediaItem,
})