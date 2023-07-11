import './cart-dropdown.styles.scss'
import Button from '../Button'
import CartItem from '../CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const checkoutClick = () => {
        navigate('/checkout')
    }


    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                <CartItem name="lol" quantity="222" />
                {cartItems.map(item => <CartItem item={item} />)}
            </div>
            <Button buttonType='inverted' onClick={checkoutClick}>Checkout</Button>
        </div>
    )
}

export default CartDropDown