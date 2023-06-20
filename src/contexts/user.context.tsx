import { createContext, useEffect, useState } from 'react';
import { onAuthChangeStateListener } from '../utils/firebase.util';


const defaultValue = {
    currentUser: null,
    setCurrentUser: (value) => null
}
export const UserContext = createContext(defaultValue)


export const UserContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unSub = onAuthChangeStateListener((user: any) => {
            if (user === null) setCurrentUser(null)
            setCurrentUser(user)
            // console.log('user', user)
        })
        return unSub
    }, [])


    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider >
}