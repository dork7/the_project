import ProductCardShop from '../ProductCard'
import './category-preview.styles.scss'

const CategoryPreview = (props) => {
    const { title, products } = props
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>
                    {title.toUpperCase()}
                </span>
            </h2>
            <div className='preview'>
                {products?.filter((value, index, array) => index < 4).map((data) =>
                    (<ProductCardShop key={data.id} product={data} />)
                )}
            </div>
        </div>
    )

}

export default CategoryPreview