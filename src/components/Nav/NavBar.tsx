import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to={`/`} className='nav-link'>
                <p>
                    Home
                </p>
            </Link>
            <Link to={"/login"}>
                <p>
                    Login
                </p>
            </Link>
            <Link to={"/test-page"}>
                <p>
                    Test Page
                </p>
            </Link>
            <Link to={"/sass"}>
                <p>
                    SASS
                </p>
            </Link>
        </nav>
    )
}

export default NavBar