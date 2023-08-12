import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../Button'
import CartItem from '../CartItem'
import './cart-dropdown.styles.scss'
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
            <Button buttonType='inverted' onClick={checkoutClick}>Checkout</Button>
        </div>
    )
}

export default CartDropDown