import { combineReducers } from 'redux';
import meals from './meals';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    meals,
    errors,
    messages
});
