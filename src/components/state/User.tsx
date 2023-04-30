import { useState } from 'react'

type AuthUserType = {
    name: string,
    age: number
}

const User = () => {

    const [user, setUser] = useState<null | AuthUserType>(null)

    const handleLogin = () => {
        setUser({
            name: "LOL",
            age: 40
        })
    }
    const handleLogout = () => {
        setUser(null)
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
                I am {user?.name}, my age is {user?.age}
            </p>
        </div>
    )
}

export default User