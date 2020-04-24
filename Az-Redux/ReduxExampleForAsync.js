//import redux from 'redux';
// As I'm using this as node application so redux needs to be import like:
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
console.log("from index.js");

// Application Initial State:
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Need action type which should be some constant string:
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
// Now we need action creater, it'll be a function that return action:
const fetchUserRequest = () => {
    return {
        type    : FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type    : FETCH_USER_SUCCESS,
        payload : users
    }
}

const fetchUserFailure = (error) => {
    return {
        type    : FETCH_USER_FAILURE,
        payload : error
    }
}
// Reducer Funtions as arrow function

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading :   false,
                users :   action.payload
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading :   false,
                users: [],
                error: action.payload
            }
    }
}

// Need Async Action Creator
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data will have users
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            // error.message have api error details    
            dispatch(fetchUserFailure(error.message))
        })
    }
}

// Need to create Store with middleware redux-logger
const store = createStore(reducer,applyMiddleware(logger,thunkMiddleware));
// Need to subscribe our store 
const unSubscribe = store.subscribe(() => {})
store.dispatch(fetchUsers())
//because it's async function so we shouldn't unSubscribe sync way.
//unSubscribe()