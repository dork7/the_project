import './cartItem.styles.scss'
const CartItem = (props: any) => {
    if (!props.item) return
    const { productName, price, quantity, imageUrl } = props?.item
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} />
            <div className="item-details">
                <span className='name'>{productName}</span>
                <span className='price'>
                    {quantity} | $ {quantity * price}
                </span>
            </div>
        </div>
    )
}

export default CartItem