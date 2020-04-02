import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { save, load } from 'redux-localstorage-simple'
import rowsReducer from './rows-reducer'
import statusReducer from './status-reducer'
import colorReducer from './color-reducer'

const rootReducer = combineReducers({
  rowsReducer,
  statusReducer,
  colorReducer,
})

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(save())),
  )

const store = configureStore(load())

export default store