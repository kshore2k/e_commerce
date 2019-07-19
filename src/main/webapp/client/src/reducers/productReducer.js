import { FETCH_COLLECTION, FETCH_PRODUCT } from '../actions/types';

const initialState = {
    collections: {},
    product: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    };
};