import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './UserType';
import axios from 'axios'

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

// Need Async Action Creator
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data will have users
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            // error.message have api error details
            const errorMessage = error.message; 
            dispatch(fetchUserFailure(errorMessage))
        })
    }
}
