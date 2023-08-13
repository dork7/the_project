import { combineReducers } from 'redux';
import { cartReducer } from '../reducers/cart.reducer';
import { userReducer } from './user/user.reducer';
import { productReducer } from './product/product.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    cart: cartReducer
})