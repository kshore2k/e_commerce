import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const fetchCart = cartId => dispatch => {
    fetch(`/api/carts/${cartId}`)
        .then(res => res.json())
        .then(cart => 
            dispatch({
                type: FETCH_CART,
                payload: cart
            })
        )
};

export const addToCart = (cartID, productId) => dispatch => {
    fetch(`/api/carts/${cartID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ productId, productToAdd: 'true' })
    })
        .then(res => res.json())
        .then(product =>
            dispatch({
                type: ADD_TO_CART,
                payload: product
            })
        )
};

export const removeFromCart = (cartID, productId) => dispatch => {
    fetch(`/api/carts/${cartID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ productId, productToAdd: 'false' })
    })
        .then(res => res.json())
        .then(product =>
            dispatch({
                type: REMOVE_FROM_CART,
                payload: product
            })
        )
};