export const getProductSelector = (state => state.products.products.reduce((acc, product) => {
    const { title, items } = product
    acc[title.toLowerCase()] = items
    return acc
}, {}))
