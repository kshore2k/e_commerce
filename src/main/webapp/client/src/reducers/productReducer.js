import { FETCH_COLLECTION, FETCH_COLLECTION_BY_PRICE, FETCH_PRODUCT } from '../actions/types';


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
        case FETCH_COLLECTION_BY_PRICE:
            return {
                ...state,
                collections: action.payload
            }
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    };
};