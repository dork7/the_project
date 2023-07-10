import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cartItems: [],
    isCartOpen: false,
    setIsCartOpen: () => { },
    addItemsToCart: () => { },
    count: 0
})

const addCartItem = (cartItems, productToAdd) => {
    const idx = cartItems.findIndex(item => item.id === productToAdd.id)
    if (idx !== -1) {
        cartItems[idx].quantity = cartItems[idx].quantity + 1
        return [...cartItems]
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
}

export const CartContextProvider = ({ children }: any) => {
    const [cartItems, setCartItems] = useState([])

    const [isCartOpen, setIsCartOpen] = useState(false)

    const [count, setCount] = useState(0)

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        // setCount(prevCount => prevCount + 1)
        // setCount(cartItems.length)
        const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setCount(cartItemCount)
    }, [cartItems])


    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart, count }
    return <CartContext.Provider value={value} >
        {children}
    </CartContext.Provider >
}