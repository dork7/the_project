import { getCategoriesAndDocument } from '../../utils/firebase.util'
import { PRODUCT_ACTION_TYPES } from './actionTypes'

export const fetchProductsStart = () => ({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START })

export const fetchProductsSuccess = (products) => ({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, payload: products })

export const fetchProductsFailed = (error) => ({ type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, payload: error })

export const fetchProductsAsync = () => async (dispatch) => {
    try {
        dispatch(fetchProductsStart())
        const categoriesArray = await getCategoriesAndDocument()
        dispatch(fetchProductsSuccess(categoriesArray))
    }
    catch (err) {
        dispatch(fetchProductsFailed(err))
    }
}
