import { FETCH_CART, ADD_TO_CART } from '../actions/types';

const initialState = {
    details: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CART:
            return {
                ...state,
                details: action.payload
        };
        case ADD_TO_CART:
            return {
                ...state,
                details: action.payload
        };
        default:
            return state;
    };
};