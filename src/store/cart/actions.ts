import { CART_ACTION_TYPES } from './types'



export const updateCartItemAction = (newCartItems, dispatch) => {
    // generate new cart total
    const totalPrice = newCartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
    // generate new cart count
    const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0)
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEM, payload: { totalPrice, count, cartItems: newCartItems } })
}


const addCartItem = (cartItems: any, productToAdd: any) => {
    const idx = cartItems.findIndex((item: any) => item.id === productToAdd.id)
    if (idx !== -1) {
        cartItems[idx].quantity = cartItems[idx].quantity + 1
        return [...cartItems]
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
}
const removeCartItem = (cartItems: any, cartItemToRemove: any, wholeItem: boolean) => {
    const idx = cartItems.findIndex((item: any) => item.id === cartItemToRemove.id)

    if (wholeItem) {
        return cartItems.filter((item: any) => item.id !== cartItemToRemove.id)
    }
    if (idx !== -1) {
        if (cartItems[idx].quantity === 1) {
            return cartItems.filter((item: any) => item.id !== cartItemToRemove.id)
        }
        cartItems[idx].quantity = cartItems[idx].quantity - 1
        return [...cartItems]
    }
}



export const addItemsToCart = (cartItems, productToAdd: any) => {
    return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: addCartItem(cartItems, productToAdd) }
}
export const removeItemFromCart = (cartItems, cartItemToRemove: any, wholeItem?: any) => {
    return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: removeCartItem(cartItems, cartItemToRemove, wholeItem) }
}
export const clearCart = () => {
    return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: [] }
}

export const setIsCartOpen = (isOpen) => {
    return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isOpen }
}