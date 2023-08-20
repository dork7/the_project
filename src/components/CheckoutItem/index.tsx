import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemsToCart, removeItemFromCart } from '../../store/cart/actions'
import { getCartItems } from '../../store/cart/selector'
import './checkoutItem.styles.scss'
const CheckoutItem = (props) => {

  // const { cartItems, addItemsToCart, removeItemFromCart } = useContext(CartContext)
  const dispatch = useDispatch()
  const { productName, id, quantity, price, imageUrl } = props.cartItem

  const cartItems = useSelector(getCartItems)

  const addItemHandler = (item) => {
    console.log('item', item)
    dispatch(addItemsToCart(cartItems, item))
  }
  const removeItemHandler = (item, wholeItem = false) => {
    console.log('item', item)
    dispatch(removeItemFromCart(cartItems, item, wholeItem))
  }


  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={productName} />

      </div>
      <span className='name'>{productName}</span>
      <span className='quantity'>
        <div className="arrow" onClick={() => removeItemHandler(props.cartItem)}>&#10094;</div>
        <span className='value'>
          {quantity}
        </span>
        <div className="arrow" onClick={() => addItemHandler(props.cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItemHandler(props.cartItem, true)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem