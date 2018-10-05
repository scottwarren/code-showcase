import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from './reducers/RootReducer.js'

const initialAppState = {
  messages: [],
}

export default function configureStore(initialState = initialAppState) {
  return createStore(
    RootReducer,
    applyMiddleware(thunk)
  )
}