import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import CrwnLogo from "../../assets/crown.svg"
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase.util'
import { notifyMe } from '../../utils/notifications'
import Button from '../Button'
import CartDropDown from '../CartDropDown'
import CartIcon from '../CartIcon'
import { NavContainer, NavItemContainer } from './NavBar.style'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'

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

    const currentUser = selectCurrentUser()

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
            <NavContainer>
                <Link to="/" className='logo-container'>
                    <img src={CrwnLogo} />
                </Link>
                <NavItemContainer className='navItems'>

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
                    <CartIcon />
                    {isCartOpen && <CartDropDown />}
                    <Button onClick={checkoutClick} ></Button>
                </NavItemContainer>
            </NavContainer >
            <Outlet />
        </>

    )
}

export default NavBar