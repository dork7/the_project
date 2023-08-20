import { createSelector } from 'reselect'

const getProductReducer = (state) => state.products

export const getProduct = createSelector([getProductReducer], (productsSlice) => productsSlice.products)


export const getProductSelector = createSelector([getProduct], (products) => products.reduce((acc, product) => {
    const { title, items } = product
    acc[title.toLowerCase()] = items
    return acc
}, {}))
