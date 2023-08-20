import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/Nav/NavBar'
import AuthPage from './routes/auth/Auth.page'
import CheckoutPage from './routes/checkout/Checkout.page'
import HomePage from './routes/home/home.page'
import ShopPage from './routes/shop/shop.page'
import { useEffect } from 'react'
import { getCategoriesAndDocument, onAuthChangeStateListener } from './utils/firebase.util'
import { setCurrentUser } from './store/user/actions'
import { useDispatch } from 'react-redux'
import { setProducts } from './store/product/actions'
import SHOP_DATA from './data/shop-data'
import React from 'react'

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const unSub = onAuthChangeStateListener((user: any) => {
            if (user === null) dispatch(setCurrentUser(null))
            dispatch(setCurrentUser(user))
        })
        return unSub
    }, [])

    useEffect(() => {
        // addCategoriesAndDocument('categories', SHOP_DATA)
        (async () => {
            const categoriesArray = await getCategoriesAndDocument()
            dispatch(setProducts(categoriesArray))
        })()
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />} >
                    <Route index element={<HomePage />} />
                    <Route path='shop/:category' element={<ShopPage />} />
                    <Route path='auth' element={<AuthPage />} />
                    <Route path='checkout' element={<CheckoutPage />} />
                </Route>
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App