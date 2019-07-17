import { FETCH_COLLECTION } from './types';

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