import { PRODUCT_ACTION_TYPES } from './actionTypes'

export const setProducts = (products) =>
    ({ type: PRODUCT_ACTION_TYPES.SET_PRODUCTS, payload: products })

// export const setProductMap = (products) => products.reduce((acc, product) => {
//     const { title, items } = product
//     acc[title.toLowerCase()] = items
//     return acc
// }, {})
