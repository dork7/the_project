import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cartItems: [],
    isCartOpen: false,
    setIsCartOpen: () => { },
    addItemsToCart: () => { },
    removeItemFromCart: () => { },
    count: 0
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
const removeCartItem = (cartItems: any, cartItemToRemove: any) => {
    const idx = cartItems.findIndex((item: any) => item.id === cartItemToRemove.id)
    if (idx !== -1) {
        if (cartItems[idx].quantity === 1) {
            return cartItems.filter((item: any) => item.id !== cartItemToRemove.id)
        }
        cartItems[idx].quantity = cartItems[idx].quantity - 1
        return [...cartItems]
    }
}

export const CartContextProvider = ({ children }: any) => {
    const [cartItems, setCartItems] = useState([])

    const [isCartOpen, setIsCartOpen] = useState(false)

    const [count, setCount] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    useEffect(() => {
        // setCount(prevCount => prevCount + 1)
        // setCount(cartItems.length)
        const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setCount(cartItemCount)
    }, [cartItems])


    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart, count, removeItemFromCart }
    return <CartContext.Provider value={value} >
        {children}
    </CartContext.Provider >
}