
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Nav/NavBar'

const Root = () => {
    return (
        <div id="detail">
            <NavBar />
            {/* <Outlet /> */}
        </div>
    )
}

export default Root