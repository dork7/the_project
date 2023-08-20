import { createSelector } from 'reselect'

export const getCartItemsReducer = (state) => state.cart

export const getCartItems = createSelector([getCartItemsReducer], (cartItemSlice) => cartItemSlice.cartItems)

export const getCartTotal = createSelector([getCartItems], (cartItems) => cartItems?.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0))
export const getCartCount = createSelector([getCartItems], (cartItems) => cartItems?.reduce((acc, item) => acc + item.quantity, 0))

// export const getCartTotal = (state) => state.cart.cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
// export const getCartCount = (state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)

export const getIsCartOpen = (state) => state.cart.isCartOpen