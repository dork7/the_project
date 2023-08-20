import { CART_ACTION_TYPES } from './types'

export const CART_INITIAL_STATE = {
    totalPrice: 0,
    count: 0,
    isCartOpen: false,
    cartItems: []
}
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return {
                ...state,
                cartItems: [...payload]
            }
        // case CART_ACTION_TYPES.SET_CART_COUNT:
        //     return {
        //         ...state,
        //         count: payload
        //     }
        // case CART_ACTION_TYPES.SET_CART_TOTAL:
        //     return {
        //         ...state,
        //         totalPrice: payload
        //     }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            return state
    }
}