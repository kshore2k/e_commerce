import { LOGIN_USER, INVALID_USER } from '../actions/types';

const initialState = {
    loggedIn: false,
    details: {},
    error: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                details: action.payload,
                error: null
            };
        case INVALID_USER:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};