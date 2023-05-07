import React from 'react'
import { Link, Router } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <li>
                <Link to={`/`} className='nav-link'>
                    <p>
                        Home
                    </p>
                </Link>
            </li>
            <li>
                <Link to={"/login"}>
                    <p>
                        Login
                    </p>
                </Link>
            </li>
        </nav>
    )
}

export default NavBar