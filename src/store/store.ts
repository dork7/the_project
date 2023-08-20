import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootReducer'



const middleWareLogger = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    next(action)
}


const persisConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persisConfig, rootReducer)

const middleWares = [
    // logger,
    // middleWareLogger
]
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)