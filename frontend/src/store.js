import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from './reducers/rootReducer.js'

const selectedInitialState = {
  messages: [],
}

export default function configureStore(initialState = selectedInitialState) {
  return createStore(
    RootReducer,
    applyMiddleware(thunk)
  )
}