In this Project I'll create simple app with React-Redux and discuss all about react-redux.

#### Environment
* I have dicussed about this in hello-world example, please have a look.

        npm start
* check this [url](http://localhost:3000/)
* Need to dependencises `Redux` & `React-Redux`.
* install:

                npm install redux react-redux
### Topics:

#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/CakeContainer.js` is a functional component.
* `src/redux` is for appication level features with respect to child folders
* `src/redux/cake` is feature for our application and it'll contain related js files
* `src/redux/store.js` is application store.
* `src/redux/cake/cakeActions.js` is Action creator.
* `src/redux/cake/cakeType.js` is Action Type, it'll use in reducer and action creator.
* `src/redux/cake/cakeReducer.js` is Cake Reducer, it'll use in store creation.
* Now We need our `Store.js` should interact with our application.
#### Details:
* We have created app with CakeContainer
* Now needs to define actions and action creators, with required actionType as well.
* After that Need to create Reducer and then store.
* At the end we need to handle interaction of our Store with Application for that in App.js:
        
                import { Provider } from 'react-redux';
                import store from './redux/Store'
* And in return of App() need to use Provider with props store

                function App() {
                      return (
                        <Provider store={store}>
                                <div className="App">
                                        <CakeContainer/>
                                </div>
                        </Provider>
                        );
                }
* After this, We need to two method `mapStateToProps` & `mapDispatchToProps` in every component where we need to application state from `Redux-Store` (Store)

                const mapStateToProps = (state) => {
                        return {
                                numOfCakes: state.numOfCakes
                        }
                }
                const mapDispatchToProps = (dispatch) => {
                        return {
                                buyCake: () => dispatch(buyCake())    
                        }    
                }
* I have create `index.js` to export all the Actions and will import this file in every component for actions because in `dispatch(..)` need to pass specific action.
* After all this we need to connect above mention two methods for that we need :

                export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
* Now the final step to getState to display on page and call dispatch method:

                 <div>
                        <h2>Number of cakes: {props.numOfCakes}</h2>
                        <button onClick={props.buyCake}>Buy Cake</button>
                </div>
###### RootReducer.js:
* If we have multiple reducers then we have to use: 
        
                import {combineReducers} from 'redux';
* combineReducers funtion can take object as parameter and we have to add all the reducers in key, value pare:

                const rootReducer = combineReducers({
                        cake        : cakeReducer,
                        iceCream    : iceCreamReducer
                });
* After using key, Value for reducers now also needs to change action creators because now state object will be:

                state = {
                        cake            : {numOfCakes},
                        iceCream        : {numOfIceCreams}
                }

##### Redux-Logger:
* Now It's time to add Redux Logger into the brwoser:
* Install new dependency:

                npm i redux-logger
* By the help of `{applyMiddleWare}` from `redux` we can use third party lib for loggin, async actions.
* Need to import logger in `Store.js`:

                import logger from 'redux-logger'
* Apply logger by applyMiddleware (in `Store.js`):

                import {createStore, applyMiddleware} from 'redux';
* After import `applyMiddleware` just need to pass as 2nd parameter of `createStore()`

                const store = createStore(rootReducer, applyMiddleware(logger))
###### Redux Dev tools:
* Install extension in google chrome.
* Install `Redux-Dev-Tools-Extension` in app:

                npm install --save redux-devtools-extension
* Import `{composeWithDevTools}` from `redux-devtools-extension`

                import { composeWithDevTools } from 'redux-devtools-extension'
* `composeWithDevTools` will be passed to `createStore()` in 2nd parameter and we can pass `applyMiddleware` as his parameter.

                const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
###### Payload (pass input to reduce number of cakes):
* `src/components/NewCakeContainer` is for getting input from user to buy number of cakes.
* I have added input field and import useState from redux

                import React,{ useState } from 'react';
* After import: (in side function)

                const [number, setNumber] = useState(1);
* Add `html input field` for input and set value onChange:

                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
* Need to pass input number to `buyCake(number)`

                <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
* After this, needs to change `mapDispatchToProps` as well:

                const mapDispatchToProps = (dispatch) => {
                        return {
                                buyCake: (number) => dispatch(buyCake(number))    
                        }    
                }
* Now `CakeActions` need to update, passing number to payload property is conventional way:
 
                // Action Creator
                export const buyCake = (number = 1) => {
                        return {
                                type    : BUY_CAKE,
                                payload : number
                        }
                }
* In the last `CakeProducer` also need to change:

                numOfCakes: state.numOfCakes - action.payload
#### Notes:
* `HooksCakeContainer.js` used hooks for `getState()` and `dispatch` in a smarter way.
* `RootReducer.js` for multiple Reducers