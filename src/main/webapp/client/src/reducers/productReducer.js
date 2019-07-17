import { FETCH_COLLECTION } from '../actions/types';

const initialState = {
    collections: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    };
};