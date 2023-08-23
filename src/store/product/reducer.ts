import { PRODUCT_ACTION_TYPES } from './actionTypes'

export const INITIAL_STATE = {
    products: [],
    isLoading: false,
    error: null
}

export const productReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action

    switch (type) {
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload,
                isLoading: false
            }
        case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        default:
            return state
    }
}