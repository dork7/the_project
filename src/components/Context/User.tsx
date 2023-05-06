import React, { useContext, useEffect } from 'react'
import { UserContext, UserContextProvider, UserContextType } from './UserContext'

const User = () => {
    const userContextRef = useContext<UserContextType>(UserContext)
    console.log('userContextRef', userContextRef)


    const handleLogin = () => {
        if (userContextRef) {

            userContextRef.setUserData({
                name: "lol",
                age: 222
            })
        }
    }
    const handleLogout = () => {
        userContextRef.setUserData(null)
    }

    return (
        <>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div> --- {JSON.stringify(userContextRef.userData)}</div>
        </>
    )
}

export default User