import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../Button'
import './productCardShop.style.scss'
import { CartContext } from '../../contexts/cart.context'
const ProductCardShop = ({ product }: any) => {
    const { id, productName, price, imageUrl } = product
    const { addItemsToCart } = useContext(CartContext)

    const addItem = () => {
        addItemsToCart({ id, productName, price, imageUrl })
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} />
            <div className="footer">
                <span className="name">{productName}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>Add to cart</Button>
        </div>
    )
}

export default ProductCardShop