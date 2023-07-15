import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/product.context'
import ProductCardShop from '../../components/ProductCard'
import './shop.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import CategoryPreview from '../../components/CategoryPreview'
const ShopPage = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>

            {Object.keys(categoriesMap).map((item) => {
                return (
                    <div className='shop-container'>
                        <CategoryPreview title={item} products={categoriesMap[item]} />
                    </div>
                )
            })}
        </>
    )
}

export default ShopPage