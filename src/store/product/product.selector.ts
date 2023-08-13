import { useSelector } from 'react-redux';

export const getProductSelector1 = () => useSelector(state => state.products)

export const getProductSelector = () => useSelector(state => state.products.products.reduce((acc, product) => {
    const { title, items } = product
    acc[title.toLowerCase()] = items
    return acc
}, {}))
