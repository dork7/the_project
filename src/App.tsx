import React from 'react'
import HomeComponent from './routes/home/home.components'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import ShopComponent from './routes/shop/shop.component'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavBar />} >
                    <Route index element={<HomeComponent />} />
                    <Route path='shop' element={<ShopComponent />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App