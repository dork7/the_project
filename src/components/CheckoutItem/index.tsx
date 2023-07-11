import React from 'react'
import './checkoutItem.styles.scss'
const CheckoutItem = (props) => {
  const { productName, id, quantity, price, imageUrl } = props.cartItem

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={productName} />

      </div>
      <span className='name'>{productName}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button'>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem