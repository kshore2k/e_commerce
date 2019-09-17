import { LOGIN_USER, INVALID_USER, REGISTER_USER } from '../actions/types';

const initialState = {
    loggedIn: false,
    details: { cart: { id: 0 } },
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
        case REGISTER_USER:
            return {
                ...state,
                loggedIn: true,
                details: action.payload
            }
        default:
            return state;
    };
};