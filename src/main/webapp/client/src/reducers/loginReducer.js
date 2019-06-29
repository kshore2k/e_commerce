import { LOGIN_USER } from '../actions/types';

const initialState = {
    details: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                details: action.payload
            };
        default:
            return state;
    };
};