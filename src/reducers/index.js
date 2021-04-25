import {combineReducers} from 'redux';
import {loading} from './utils';
import {users, currentUser} from './users';
import {articles} from './articles';

export default combineReducers({
    loading,
    users,
    currentUser,
    articles,
})