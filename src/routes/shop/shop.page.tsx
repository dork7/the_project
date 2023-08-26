import { useParams } from 'react-router-dom';
import CategoryPreview from '../../components/CategoryPreview';
import { getProductSelector, selectProductIsLoading } from '../../store/product/selector';
import './shop.styles.scss';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/index'
const ShopPage = () => {
    const categoriesMap = useSelector(getProductSelector)
    const isLoading = useSelector(selectProductIsLoading)
    const params = useParams()
    return (
        <>
            <div className='shop-container' key={categoriesMap[params.category]}>
                {isLoading ? <Spinner /> :
                    <CategoryPreview title={params.category} products={categoriesMap[params.category]} />
                }
            </div>
        </>
    )
}

export default ShopPage