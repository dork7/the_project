import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer'



const middleWareLogger = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    next(action)
}


const middleWares = [
    // logger,
    // middleWareLogger
]
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)