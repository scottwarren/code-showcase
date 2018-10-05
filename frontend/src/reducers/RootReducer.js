import { combineReducers } from 'redux'
import messagesReducer from './MessagesReducer'

export default combineReducers({
  messages: messagesReducer,
});