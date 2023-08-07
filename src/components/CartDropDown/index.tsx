import './cart-dropdown.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../Button'
import CartItem from '../CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
const CartDropDown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext)

    const navigate = useNavigate()

    const checkoutClick = () => {
        navigate('/checkout')
        setIsCartOpen(false)
    }


    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                <CartItem name="lol" quantity="222" />
                {cartItems.map(item => <CartItem item={item} />)}
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={checkoutClick}>Checkout</Button>
        </div>
    )
}

export default CartDropDown