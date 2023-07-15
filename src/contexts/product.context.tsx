import { createContext, useEffect, useState } from 'react';
// import SHOP_DATA from '../data/shopData.json'
import SHOP_DATA from '../data/shop-data';
import { addCategoriesAndDocument, getCategoriesAndDocument } from '../utils/firebase.util';


export const CategoriesContext = createContext({
    catagoriesMap: {}
})

export const CategoriesContextProvider = ({ children }: any) => {

    const [categoriesMap, setCategoriesMap] = useState({})
    const value = { categoriesMap, setCategoriesMap }

    useEffect(() => {
        // addCategoriesAndDocument('categories', SHOP_DATA)
        (async () => {
            const data = await getCategoriesAndDocument()
            console.log('data', data)
            setCategoriesMap(data)
        })()
    }, [])

    return <CategoriesContext.Provider value={value} >
        {children}
    </CategoriesContext.Provider >
}