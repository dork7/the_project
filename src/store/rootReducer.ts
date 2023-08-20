import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import { productReducer } from './product/reducer';
import { cartReducer } from './cart/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer
})