import { Link } from 'react-router-dom'
import ProductCardShop from '../ProductCard'
import './category-preview.styles.scss'

const CategoryPreview = (props) => {
    const { title, products } = props
    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={`/shop/${title}`}>
                    <span className='title'>
                        {title.toUpperCase()}
                    </span>
                </Link>
            </h2>
            <div className='preview'>
                {products?.map((data) =>
                    (<ProductCardShop key={data.id} product={data} />)
                )}
            </div>
        </div>
    )

}

export default CategoryPreview