import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './RootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//const store = createStore(rootReducer, applyMiddleware(logger))

// With Redux-DevTools-Extension
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store