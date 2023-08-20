// const totalPrice = newCartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)


// const count = newCartItems.reduce((acc, item) => acc + item.quantity, 0)

export const getCartItems = (state) => state.cart.cartItems

export const getCartTotal = (state) => state.cart.cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)
export const getCartCount = (state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)

export const getIsCartOpen = (state) => state.cart.isCartOpen