import React from 'react'
import './styles/index.css'

const SASS = () => {
    return (

        <header className="showcase">
            <div className="container">
                <nav className='nav-bar'>
                    <h1 className="logo">My Website</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav>

                <div className="showcase-content">
                    <div>
                        <h1>Make Your Marketing Real</h1>
                        <p className="m-1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                            eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
                            vitae dolore.
                        </p>
                        <a href="#" className="btn-primary">Learn More</a>
                        <a href="#" className="btn-secondary">Sign Up</a>
                    </div>
                    <img
                        src="https://img.freepik.com/free-photo/galaxy-nature-aesthetic-background-starry-sky-mountain-remixed-media_53876-126761.jpg?w=1800&t=st=1683453675~exp=1683454275~hmac=ff17fd3ebf4bb1de7e87b318ede6bc9778955ac6deb909777fc4ec7927a63517"
                    />
                </div>
            </div>
        </header>
    )
}

export default SASS