import { ADD_TO_CART } from './types';

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