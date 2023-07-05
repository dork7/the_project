import './cart-icon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg'
const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            {/* <ShoppingIcon className={'shopping-icon'} /> */}
            <img className={'shopping-icon'} src={ShoppingIcon} />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon