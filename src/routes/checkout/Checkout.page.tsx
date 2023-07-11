import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'
import CheckoutItem from '../../components/CheckoutItem'
const CheckoutPage = () => {
    const { cartItems, addItemsToCart, removeItemFromCart } = useContext(CartContext)
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
            {cartItems?.map(item => <CheckoutItem cartItem={item} />)}
            {/* {cartItems?.map((item: any) => {
                const { productName, id, quantity, price } = item
                return <div key={id}>
                    <h2>
                        {productName}
                    </h2>
                    <span onClick={() => removeItemFromCart(item)}>Dec</span>  <br />
                    <span>{quantity}</span>
                    <br />
                    <span onClick={() => addItemsToCart(item)}>Inc</span>
                </div >
            })} */}
            <span className='total'>TOTAL </span>
        </div>
    )
}

export default CheckoutPage