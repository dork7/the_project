import { combineReducers } from 'redux';
import { cartReducer } from '../reducers/cart.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})