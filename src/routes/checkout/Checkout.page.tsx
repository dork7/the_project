import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutPage = () => {
    const { cartItems, addItemsToCart, removeItemFromCart } = useContext(CartContext)
    return (
        <div>{cartItems?.map((item: any) => {
            const { productName, id, quantity, price } = item
            return <div key={id}>
                <h2>
                    {productName}
                </h2>
                <span onClick={() => removeItemFromCart(item)}>Dec</span>  <br />
                <span>{quantity}</span>

                <br />    <span onClick={() => addItemsToCart(item)}>Inc</span>
            </div >
        })}</div >
    )
}

export default CheckoutPage