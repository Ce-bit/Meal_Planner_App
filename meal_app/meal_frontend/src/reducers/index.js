import { combineReducers } from 'redux';
import meals from './meals';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    meals,
    errors,
    messages,
    auth
});
