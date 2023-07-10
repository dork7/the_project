import { createContext, useState } from 'react';

export const CartContext = createContext({
    cartProduct: [],
    isCartOpen: false,
    setIsCartOpen: () => { }
})
// const { allProducts } = useContext(ProductsContext)

export const CartContextProvider = ({ children }: any) => {
    const [allProducts, setAllProducts] = useState([])

    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = { isCartOpen, setIsCartOpen }

    return <CartContext.Provider value={value} >
        {children}
    </CartContext.Provider >
}