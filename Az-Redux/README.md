In this Project I'll create simple `react app` with `Redux lib` and discuss about basics of React-Redux fundamentals.

#### Environment
* Create simple new folder `Az-Redux` and then run inside folder.
* Before running bellow command `node` & `npm` should be install.
                
                npm init --yes
* It'll create `package.json` file inside your folder.
* Need to add `Redux lib` as dependency.
* In side `Az-Redux` run:

                npm install redux
* After above command redux dependency will be added to the project.
* Now create index.js file and add log in file:

        console.log("From index.js");
* Run command to test:

        node index.js
* If log information display in the terminal/console then we are ready to start.

### Topics:
* What is Redux.
* Three Core concept & Principles.
* Code related to Redux lib.
#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/HttpPOST.js` is for http post example.
* `src/components/HttpGET.js` is for http get example.
* Just need to commit/uncommit component in `App.js` to test both components.
* For testing error handling just change url in  `axios.get` and `axios.post`
#### Details:
* Three core concepts:
** Store:
                
                That holde the state of application.
** Action:
                
                Describes what happend
** Reducer:

                Ties the store and actions
* Three core principles:
** First Principle:

                `The state of whole application will be stored in one object and that object will be managed by Redux store.`
** Second Principle:

                `The only way to change the state is to omit action, an object describes what happened.`
** Third Principle:

                `To specify how the state tree is transformed by actions, need to write pure reducers`
##### Redux-Store:
* One store for entire application.
* Holds Application state.
* Allow access to get state by `getState()`
* Allow state to be update by `dispach(action)`
* Register listner via by `subscribe(listner)`
##### Redux-Actions:
* The only way application can interact with `Redux-Store`.
* Carry some information from your app to the `Redux-Store`.
* Plain JavaScript object.
* Must have `type` property that indicates the type of action being performed.
* `type` property typically defined as string constants.  
* It only describe what happened but don't describe how the state changes. 
##### Redux-Reducer:
* Specify how the app's state changes in the response of `Redux-Action` that sent to the `Redux-Store`.
* `Redux-Reducer` is the incharge that tell how the application state change in `Redux-Store`.
* For Implementation `Redux-Reducer` is a JavaScript function that take `action` & `state` as an arguments and return the next state of the application.
* `Application state` should be an single object
#### Notes:
* For multiple Reducers we have to create seperate state as well as seperate action and action-creater and after that we have to use `redux.combineReducer()` to combine multiple reducers, it's should be done before creating store because it required reducer/rootReducer funtion as argument.
* `rootReducer` is a const that have value:

##### Redux-Middleware:
* It provide third party extension point between dispatching an action, and the moment it reaches the reducer.
* `Redux-MiddleWare` can be useful for logging, crash reporting, performing async task etc.
###### Redux-Logger: (ReduxLoggerExample.js)
* Command for install : 

        npm install redux-logger
* we need to import redux-logger and for using any third party lib we have to use `Redux.ApplyMiddleware`:

        const reduxLogger = require('redux-logger');
        const applyMiddleware = redux.applyMiddleware;
        const logger = reduxLogger.createLogger();
* After that at the time of creating store we need to pass second parameter `applyMiddleware`

        const store = createStore(rootReducer, applyMiddleware(logger));
* Now remove customer loging from `store.subscribe(() =>{console.log('....')})`.
##### Redux-Async: (ReduxExampleForAsync.js)
* I'll fetch lils of users from some api and store in to Redux store.
* `State`, `Action` & `Reducer` will be change with respect to async.
###### State:
* it will be three properties those will help for async calls.

        state = {
            loading: true,
            data: [],
            error: '' 
        }
###### Action:
* it will be three actions for api call

        FETCH_USER_REQUEST - for fetch list of users
        FETCH_USER_SUCCESS - for fetched successfully 
        FETCH_USER_FAILURE - for error fetch data

###### Reducers:
* It'll have different `switch cases`:

        case : FETCH_USER_REQUEST
                loading: true
        case : FETCH_USER_SUCCESS
                loading: false,
                data: users[] (from api)
        case : FETCH_USER_FAILURE
                loading: false,
                error: error (from api)
###### for this we need Async Action creator:
* For Api calling we need to use `axios` JavaScript lib.
* For `Async action creator` we need `redux-thunk`.
* Need to install both dependencies:

        npm install axios redux-thunk
* Now we need to load & apply `Redux-thunk` as middleware in `Redux-Store` while creating store.
* `Redux-Thunk` have ability to return action instead of action object.

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
