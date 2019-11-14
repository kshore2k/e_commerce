import { FETCH_COLLECTION, 
         FETCH_COLLECTION_BY_CATEGORY, 
         FETCH_COLLECTION_BY_PRICE, 
         FETCH_COLLECTION_BY_RATING, 
         FETCH_PRODUCT,
         ADD_CATEGORY_FILTER_TO_STATE } from '../actions/types';


const initialState = {
    collections: {},
    product: {},
    isCatFilterApplied: false,
    catFilter: ""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        case FETCH_COLLECTION_BY_CATEGORY:
            return {
                ...state,
                collections: action.payload
            };
        case FETCH_COLLECTION_BY_PRICE:
            return {
                ...state,
                collections: action.payload
            };
        case FETCH_COLLECTION_BY_RATING:
            return {
                ...state,
                collections: action.payload
            }
        case FETCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case ADD_CATEGORY_FILTER_TO_STATE:
            return {
                ...state,
                isCatFilterApplied: action.payload.bool,
                catFilter: action.payload.category
            };
        default:
            return state;
    };
};