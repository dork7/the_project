import { CART_ACTION_TYPES } from '../actions/types'


const initialState = {
    count: 0,
    cartItems: [],
    isCartOpen: false,
    totalPrice: 0,
}
export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    // console.log('payload', payload)
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEM:
            return {
                ...state,
                ...payload
            }

        default:
            throw new Error(`Unhandled ${type} in cart reducer`)
    }
}