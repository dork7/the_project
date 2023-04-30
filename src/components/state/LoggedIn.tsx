import React, { useState } from 'react'

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div style={{
            margin: '2px',
            padding: '2px',
            border: "2px solid black"
        }}>
            <p>DEMO OF TYPES IN USE STATE HOOK</p>
            <button onClick={handleLogin}>
                LOGIN
            </button>
            <button onClick={handleLogout}>
                LOGOUT
            </button>
            <p>
                {isLoggedIn ? "LOGGED IN " : "LOGGED OUT"}
            </p>
        </div>
    )
}

export default LoggedIn