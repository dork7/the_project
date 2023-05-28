import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import { Outlet } from 'react-router-dom'
import { Button, Checkbox } from '@mui/material'
import { useTheme } from '@emotion/react'
import ProductCards from '../../components/Cards/ProductCard'

const Dashboard = () => {
    return (
        <div>
            <ProductCards />
        </div>
    )
}

export default Dashboard