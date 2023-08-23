import { useContext } from 'react'
import CheckoutItem from '../../components/CheckoutItem'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, getCartTotal } from '../../store/cart/selector'
import { clearCart } from '../../store/cart/actions'
const CheckoutPage = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getCartTotal)
    const dispatch = useDispatch()

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {cartItems?.map((item, idx) => <CheckoutItem key={idx} cartItem={item} />)}

            <span className='total'>TOTAL {totalPrice}</span>
            <span className='clearCart' onClick={() => dispatch(clearCart())}>Clear Cart</span>
        </div>
    )
}

export default CheckoutPage