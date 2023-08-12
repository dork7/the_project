import { CART_ACTION_TYPES } from '../actions/types'




const initialState = {
    totalPrice: 460,
    count: 6,
    cartItems: [
        {
            id: 20,
            productName: "Grey Jean Jacket",
            price: 90,
            imageUrl: "https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg",
            quantity: 1
        },
    ]
}
export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log('payload', payload)
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