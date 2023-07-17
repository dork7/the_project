import React, { useContext } from 'react'
import { Link, Outlet, Router, useNavigate } from 'react-router-dom'
import { LoginLogout, NavItems, NavLinks, NavigationContainer } from './navBar.style'
import CrwnLogo from "../../assets/crown.svg"
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase.util'
import { notifyMe } from '../../utils/notifications'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import { CartContext } from '../../contexts/cart.context'
import Button from '../Button'


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
    // {
    //     id: 3,
    //     title: 'Shop',
    //     path: '/shop'
    // },

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

    const cartContext = useContext(CartContext)
    const { isCartOpen } = cartContext

    const checkoutClick = () => {
        navigate('/checkout')
    }

    return (
        <>
            <NavigationContainer>
                <Link to="/" className='logo-container'>
                    <img src={CrwnLogo} />
                </Link>
                <NavItems>

                    {navList.map((item: NavType, idx: number) => {

                        return (
                            <div key={idx} >
                                {typeof item.title === 'function' ?
                                    <LoginLogout onClick={item.onClickHandler(currentUser, handleSignOut, navigateToAuth
                                    )}  >
                                        <p >
                                            {item.title(currentUser)}
                                        </p>
                                    </LoginLogout>
                                    : <NavLinks to={item.path} >
                                        <p >
                                            {item.title}
                                        </p>
                                    </NavLinks>}
                            </div>
                        )
                    })}
                    <CartIcon />
                    {isCartOpen && <CartDropDown />}
                    <Button onClick={checkoutClick} ></Button>
                </NavItems>
            </NavigationContainer >
            <Outlet />
        </>

    )
}

export default NavBar