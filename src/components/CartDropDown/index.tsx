import './cart-dropdown.styles.scss'
import Button from '../Button'
import CartItem from '../CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                <CartItem name="lol" quantity="222" />
                {cartItems.map(item => <CartItem item={item} />)}
            </div>
            <Button buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default CartDropDown