import { createContext, useState } from 'react';


const defaultValue = {
    currentUser: null,
    setCurrentUser: (value) => null
}
export const UserContext = createContext(defaultValue)


export const UserContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(null)

    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider >
}