import React from 'react'
import { Link, Router } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <li>
                <Link to={`/`} className='nav-link'>Home</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
        </nav>
    )
}

export default NavBar