import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CategoryPreview from '../../components/CategoryPreview'
import { CategoriesContext } from '../../contexts/product.context'
import './shop.styles.scss'
const ShopPage = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    const params = useParams()
    console.log('params', params)

    return (
        <>
            <div className='shop-container' key={categoriesMap[params.category]}>
                <CategoryPreview title={params.category} products={categoriesMap[params.category]} />
            </div>
            {/* {Object.keys(categoriesMap).map((item) => {
                return (
                    <div className='shop-container' key={item}>
                        <CategoryPreview title={item} products={categoriesMap[item]} />
                    </div>
                )
            })} */}
        </>
    )
}

export default ShopPage