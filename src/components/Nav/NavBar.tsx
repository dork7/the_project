import React from 'react'
import { Link, Router } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>

            <Link to={`/`}>Home</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    )
}

export default NavBar