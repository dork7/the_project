import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './components/Nav/NavBar'
import AuthPage from './routes/auth/Auth.page'
import CheckoutPage from './routes/checkout/Checkout.page'
import HomePage from './routes/home/home.page'
import ShopPage from './routes/shop/shop.page'

const App = () => {

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