import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import { Outlet } from 'react-router-dom'
import { Button, Checkbox } from '@mui/material'
import { useTheme } from '@emotion/react'
import ProductCard from '../../components/Cards/ProductCard'

const Dashboard = () => {
    return (
        <div>
            <ProductCard />
        </div>
    )
}

export default Dashboard