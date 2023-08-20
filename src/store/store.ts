import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './rootReducer'



const middleWareLogger = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    console.log('action.type', action.type)
    console.log('action.payload', action.payload)
    console.log('store.getState()', store.getState())

    next(action)

    console.log('new state:', store.getState())

}


const middleWares = [
    // logger,
    middleWareLogger
]
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)