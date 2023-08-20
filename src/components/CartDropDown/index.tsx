import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../Button'
import CartItem from '../CartItem'
import './cart-dropdown.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, getIsCartOpen } from '../../store/cart/selector'
import { setIsCartOpen } from '../../store/cart/actions'
const CartDropDown = () => {



    const dispatch = useDispatch()
    // dispatch(setIsCartOpen(!getIsCartOpen))
    const navigate = useNavigate()
    const cartItems = useSelector(getCartItems)
    const checkoutClick = () => {
        dispatch(setIsCartOpen(!getIsCartOpen))
        navigate('/checkout')
    }


    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                <CartItem name="lol" quantity="222" />
                {cartItems?.map(item => <CartItem item={item} />)}
            </div>
            <Button buttonType='inverted' onClick={checkoutClick}>Checkout</Button>
        </div>
    )
}

export default CartDropDown