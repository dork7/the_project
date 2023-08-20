import Button from '../Button'
import './productCardShop.style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../store/cart/selector'
import { addItemsToCart } from '../../store/cart/actions'
const ProductCardShop = ({ product }: any) => {
    const { id, productName, price, imageUrl } = product
    const cartItems = useSelector(getCartItems)
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(addItemsToCart(cartItems, { id, productName, price, imageUrl }))

    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} />
            <div className="footer">
                <span className="name">{productName}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addItem}>Add to cart</Button>
        </div>
    )
}

export default ProductCardShop