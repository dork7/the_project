import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/product.context'
import ProductCardShop from '../../components/ProductCard'
import './shop.styles.scss'
import { CartContext } from '../../contexts/cart.context'
const ShopPage = () => {
    const { allProducts } = useContext(ProductsContext)

    return (
        <div className='product-shop-container'>
            {allProducts?.map(data =>
                (<ProductCardShop key={data.id} product={data} />)
            )}
        </div >
    )
}

export default ShopPage