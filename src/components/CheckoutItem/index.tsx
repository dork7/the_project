import React, { useContext } from 'react'
import './checkoutItem.styles.scss'
import { CartContext } from '../../contexts/cart.context'
const CheckoutItem = (props) => {

  const { cartItems, addItemsToCart, removeItemFromCart } = useContext(CartContext)

  const { productName, id, quantity, price, imageUrl } = props.cartItem

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={productName} />

      </div>
      <span className='name'>{productName}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => removeItemFromCart(props.cartItem)}>&#10094;</div>
        <span className='value'>
          {quantity}
        </span>
        <div className="arrow" onClick={() => addItemsToCart(props.cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItemFromCart(props.cartItem, true)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem