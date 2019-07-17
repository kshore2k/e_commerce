import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import productReducer from './productReducer';

export default combineReducers({
    user: loginReducer,
    products: productReducer
});