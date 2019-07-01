import { LOGIN_USER, INVALID_USER } from './types';

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
        )
        .catch(err => 
            dispatch({
                type: INVALID_USER,
                payload: "Your email address or password is incorrect. Please try again. If you've forgotten your sign in details, just click the 'Forgot your password?' link below."
            })
        )
};