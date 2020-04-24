//import redux from 'redux';
// As I'm using this as node application so redux needs to be import like:
const redux = require('redux');
const createStore = redux.createStore;


console.log("from index.js");
// First we'll start from Redux-Actions

// ############ Redux-Action ###############

// Need action type which should be some constant string:
const BUY_CAKE = 'BUY_CAKE';

// Now we have to define action:
// action is an object that must has type property and other than type it can have other properties as well
/* const buyCakeActionObject = {
    type: BUY_CAKE,
    info: 'First Redux action'
} */
// Now we need action creater, it'll be a function that return action:

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

// ################ Reducer ##################
// As reducer needs two parameters as argument (previousState, action)=> return newState;
// And Application state should be a object so I have decleared initialState:

// Application State:
const initialState = {
    numOfCakes: 10
}

// Reducer Implementation:
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            // state object can have more than one property so we have to copy first then
            // Change state for copy I'm using sprade operator (three dots)
            ...state,
            // by doing above code if there are other properties (like info) they will remain same
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// ##################### Redux-Store #######################
// CreateStore function need reducer function as argument and reducer holds initial state

const store = createStore(reducer);
// first responsibility of Redux-Store is to hold application state which is done above.
console.log('Initial State', store.getState());
// 2nd responsibility to provide state by getState() is done above.
const returnValueForUnsubscribe = store.subscribe(() => {console.log('Updated State', store.getState())});
// 4th responsibility to allow users to subscribe() to the store for change status 
// and it required function as argument, it's done above.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//3rd Responsibility is to dispatch() that required action-creater funtion as argument is done above. 
returnValueForUnsubscribe()
// Last responsibility is to provide unsubscribe() functionality, 
// which we can achieve by return function of subscribe(), just needs to call, is done above.