import { useContext } from 'react'
import CheckoutItem from '../../components/CheckoutItem'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
const CheckoutPage = () => {
    const { cartItems, clearCart, totalPrice } = useContext(CartContext)

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
            <span className='clearCart' onClick={() => clearCart()}>Clear Cart</span>
        </div>
    )
}

export default CheckoutPage