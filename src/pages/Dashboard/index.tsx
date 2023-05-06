import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard