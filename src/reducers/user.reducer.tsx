import { USER_ACTION_TYPES } from '../actions/types'


const initialState = {}
export const userReducer = (state, action) => {
    const { type, payload } = action
    // console.log('state in reducer', state)
    console.log('action', action)
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error("Unhandled type in user reducer")
    }
}