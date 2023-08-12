import { createContext, useEffect, useReducer, useState } from 'react';
import { cartReducer } from '../reducers/cart.reducer';
import { updateCartItemAction } from '../actions/cart.actions';

export const CartContext = createContext({
    setIsCartOpen: () => { },
    addItemsToCart: () => { },
    removeItemFromCart: () => { },
    clearCart: () => { },
    count: 0,
    cartItems: [],
    isCartOpen: false,
    totalPrice: 0,
})

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

export const CartContextProvider = ({ children }: any) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: [{
            id: 20,
            productName: "Grey Jean Jacket",
            price: 90,
            imageUrl: "https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg",
            quantity: 1
        },], count: 0, totalPrice: 0
    })
    const { cartItems, count, totalPrice } = state

    const addItemsToCart = (productToAdd: any) => {
        updateCartItemAction(addCartItem(cartItems, productToAdd), dispatch)
    }
    const removeItemFromCart = (cartItemToRemove: any, wholeItem: any) => {
        updateCartItemAction(removeCartItem(cartItems, cartItemToRemove, wholeItem), dispatch)
    }
    const clearCart = () => {
        const newCartItem = []
        updateCartItemAction([], dispatch)

    }

    const value = { totalPrice, clearCart, isCartOpen, setIsCartOpen, cartItems, addItemsToCart, count, removeItemFromCart }
    return <CartContext.Provider value={value} >
        {children}
    </CartContext.Provider >
}