import { FETCH_COLLECTION, FETCH_PRODUCT } from './types';

export const fetchCollection = type => dispatch => {
    fetch(`/api/products/collection/${type}`)
        .then(res => res.json())
        .then(collection => 
            dispatch({
                type: FETCH_COLLECTION,
                payload: { [type]: collection }
            })
        )
};

export const fetchProduct = itemNumber => dispatch => {
    fetch(`/api/products/${itemNumber}`)
        .then(res => res.json())
        .then(product =>
            dispatch({
                type: FETCH_PRODUCT,
                payload: product
            })
        )
};