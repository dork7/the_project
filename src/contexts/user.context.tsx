import { createContext, useEffect, useReducer, useState } from 'react';
import { onAuthChangeStateListener } from '../utils/firebase.util';
import { userReducer } from '../reducers/user.reducer';
import { USER_ACTION_TYPES } from '../actions/types';

const defaultValue = {
    currentUser: null,
    // setCurrentUser: (value) => null
}
export const UserContext = createContext(defaultValue)

const INITIAL_STATE = {
    // currentUser: null
}
export const UserContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const { currentUser } = state

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    }

    useEffect(() => {
        const unSub = onAuthChangeStateListener((user: any) => {
            if (user === null) setCurrentUser(null)
            setCurrentUser(user)
        })
        return unSub
    }, [])


    const value = { currentUser, setCurrentUser }
    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider >
}