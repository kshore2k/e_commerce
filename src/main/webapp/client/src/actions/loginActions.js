import { LOGIN_USER } from './types';

export const login = (userData) => dispatch => {
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(user =>
            dispatch({
                type: LOGIN_USER,
                payload: user
            })
        );
};