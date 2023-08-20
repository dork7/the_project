import './cart-icon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { getCartCount, getIsCartOpen } from '../../store/cart/selector'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/actions'
const CartIcon = () => {
    const dispatch = useDispatch()
    const count = useSelector(getCartCount)
    const isCartOpen = useSelector(getIsCartOpen)


    return (
        <div className='cart-icon-container' onClick={() => {
            dispatch(setIsCartOpen(!isCartOpen))
        }}>
            {/* <ShoppingIcon className={'shopping-icon'} /> */}
            <img className={'shopping-icon'} src={ShoppingIcon} />
            <span className='item-count'>{count}</span>
        </div>
    )
}

export default CartIcon