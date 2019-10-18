import { FETCH_COLLECTION, FETCH_COLLECTION_BY_PRICE, FETCH_PRODUCT } from './types';

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

export const fetchCollectionByPrice = (type, priceQuery) => dispatch => {
    fetch(`/api/products/collection/${type}/filter`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(priceQuery)
    })
        .then(res => res.json())
        .then(collection => 
            dispatch({
                type: FETCH_COLLECTION_BY_PRICE,
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