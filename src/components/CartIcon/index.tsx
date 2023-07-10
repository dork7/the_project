import './cart-icon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, count } = useContext(CartContext)
    return (
        <div className='cart-icon-container' onClick={() => { setIsCartOpen(!isCartOpen) }}>
            {/* <ShoppingIcon className={'shopping-icon'} /> */}
            <img className={'shopping-icon'} src={ShoppingIcon} />
            <span className='item-count'>{count}</span>
        </div>
    )
}

export default CartIcon