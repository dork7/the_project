import { useParams } from 'react-router-dom';
import CategoryPreview from '../../components/CategoryPreview';
import { getProductSelector } from '../../store/product/product.selector';
import './shop.styles.scss';
const ShopPage = () => {
    const { products: categoriesMap } = getProductSelector()
    const params = useParams()
    return (
        <>
            <div className='shop-container' key={categoriesMap[params.category]}>
                <CategoryPreview title={params.category} products={categoriesMap[params.category]} />
            </div>
        </>
    )
}

export default ShopPage