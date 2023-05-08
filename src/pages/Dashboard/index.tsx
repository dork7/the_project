import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import { Outlet } from 'react-router-dom'
import { Button, Checkbox } from '@mui/material'
import { useTheme } from '@emotion/react'

const Dashboard = () => {
    const theme = useTheme();

    return (
        <div>
            <Checkbox defaultChecked />
        </div>
    )
}

export default Dashboard