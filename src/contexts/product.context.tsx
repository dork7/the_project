import { createContext, useState } from 'react';
import SHOP_DATA from '../data/shopData.json'

export const ProductsContext = createContext({
    products: []
})

export const ProductsContextProvider = ({ children }: any) => {
    const [allProducts, setAllProducts] = useState(SHOP_DATA)
    const value = { allProducts, setAllProducts }

    return <ProductsContext.Provider value={value} >
        {children}
    </ProductsContext.Provider >
}