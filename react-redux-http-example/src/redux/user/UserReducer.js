import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './UserType';
// Application Initial State:
const initialState = {
    loading: false,
    users: [],
    error: ''
}

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
        default: return state
    }
}

export default reducer;