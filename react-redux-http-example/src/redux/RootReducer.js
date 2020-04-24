import {combineReducers} from 'redux';
import iceCreamReducer from './iceCream/IceCreamReducer';
import cakeReducer from './cake/CakeReducer';
import userReducer from './user/UserReducer';

// combineReducer function take key,value for list of reducers
// It's Root Reducer
const rootReducer = combineReducers({
    cake        : cakeReducer,
    iceCream    : iceCreamReducer,
    user        : userReducer
});

export default rootReducer