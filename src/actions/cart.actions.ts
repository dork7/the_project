import { CART_ACTION_TYPES } from './types'

export const updateCartItemAction = (newCartItems, dispatch) => {
    // generate new cart total
    const totalPrice = newCartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
    // generate new cart count
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0)
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEM, payload: { totalPrice, count, cartItems: newCartItems } })
}