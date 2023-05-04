import { createContext, useEffect, useState } from "react";


type UserContextProps = {
    children: React.ReactNode
}

type UserDataProps = {
    name: string,
    age: number
}

export type UserContextType = {
    userData: UserDataProps | null,
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps | null>>
}

export const UserContext = createContext<UserContextType | null>(null)
// const setUserData = ({ name, age }: UserDataProps) => {

// }

export const UserContextProvider = ({ children }: UserContextProps) => {

    const [userData, setUserData] = useState<UserDataProps | null>(null)
    // useEffect(() => {
    //     setUserData({
    //         name: "asdasd"
    //     })

    // }, [])


    return <UserContext.Provider value={{ setUserData, userData }} >{children}</UserContext.Provider>
}