import React from 'react'
import { Link, Outlet, Router } from 'react-router-dom'
import './navBar.style.scss'
import CrwnLogo from "../../assets/crown.svg"

type NavType = {
    title: string
    path: string
}
const navList: NavType[] = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Shop',
        path: '/shop'
    },
]

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/" className='logo-container'>
                    <img src={CrwnLogo} />
                </Link>
                <div className='navItems'>

                    {navList.map((item: NavType) => {
                        return (
                            <Link key={item.title} to={item.path} className='nav-link'>
                                <p>
                                    {item.title}
                                </p>
                            </Link>
                        )
                    })}
                </div>

            </nav>
            <Outlet />
        </>

    )
}

export default NavBar