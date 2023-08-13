import { useReducer } from 'react';
import { combineReducers } from 'redux';
import { cartReducer } from '../reducers/cart.reducer';

export const rootReducer = combineReducers({
    user: useReducer,
    cart: cartReducer
})