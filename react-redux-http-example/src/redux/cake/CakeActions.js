import {BUY_CAKE} from './CakeType'

// Action Creator
export const buyCake = (number = 1) => {
    return {
        type    : BUY_CAKE,
        payload : number
    }
}