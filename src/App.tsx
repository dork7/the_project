import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import AuthPage from './routes/auth/Auth.page'
import HomePage from './routes/home/home.page'
import ShopPage from './routes/shop/shop.page'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />} >
                    <Route index element={<HomePage />} />
                    <Route path='shop' element={<ShopPage />} />
                    <Route path='auth' element={<AuthPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App