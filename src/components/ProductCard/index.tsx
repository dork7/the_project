import Button from '../Button'
import './productCardShop.style.scss'
const ProductCardShop = ({ product }: any) => {
    const { productName, price, imageUrl } = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} />
            <div className="footer">
                <span className="name">{productName}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted">Add to cart</Button>
        </div>
    )
}

export default ProductCardShop