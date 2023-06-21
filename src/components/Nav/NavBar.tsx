import React, { useContext } from 'react'
import { Link, Outlet, Router, useNavigate } from 'react-router-dom'
import './navBar.style.scss'
import CrwnLogo from "../../assets/crown.svg"
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase.util'
import { notifyMe } from '../../utils/notifications'


type NavType = {
    id: number
    title: string | (({ }: any) => string)
    onClickHandler?: any
    path: string
}
const navList: NavType[] = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 3,
        title: 'Shop',
        path: '/shop'
    },

    {
        id: 2,
        title: (currentUser) => currentUser !== null ? 'Logout' : 'Sign In',
        onClickHandler: (currentUser, fn, fn2) => currentUser !== null ? fn : fn2,
        path: '/auth',
    },
]

const NavBar = () => {

    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate("/auth")
    }

    const { currentUser } = useContext(UserContext)
    const handleSignOut = async () => {
        await signOutUser()
        notifyMe({ type: 'success', msg: `You're logged out` })
    }

    return (
        <>
            <nav>
                <Link to="/" className='logo-container'>
                    <img src={CrwnLogo} />
                </Link>
                <div className='navItems'>

                    {navList.map((item: NavType, idx: number) => {

                        return (
                            <div key={idx} >
                                {typeof item.title === 'function' ?
                                    <div onClick={item.onClickHandler(currentUser, handleSignOut, navigateToAuth
                                    )} className='nav-link'>
                                        <p >
                                            {item.title(currentUser)}
                                        </p>
                                    </div>
                                    : <Link to={item.path} className='nav-link'>
                                        <p >
                                            {item.title}
                                        </p>
                                    </Link>}
                            </div>
                        )
                    })}
                </div>

            </nav >
            <Outlet />
        </>

    )
}

export default NavBar