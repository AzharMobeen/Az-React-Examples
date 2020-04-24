import {BUY_ICECREAM} from './IceCreamType';

const initialIceCream = {
    numOfIceCreams: 20
}

// Lets we have but one get one free offer.
// Redux Reducer
const reducer = (state = initialIceCream, action) => {

    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 2
            }
        default: return state
    }
}

export default reducer;