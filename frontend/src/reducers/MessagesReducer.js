const initialMessagesState = {
  messages: [],
  selectedMessageId: null,
}

export default (state = initialMessagesState, action) => {
  switch (action.type) {
    case 'GENERATE_NEW_MESSAGE':
      return {
        ...state,
        messages: [
          action.payload,
          ...state.messages,
        ]
      }
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: [
          ...action.payload
        ],
      }
    case 'SELECT_MESSAGE':
      return {
        ...state,
        selectedMessageId: action.payload.selectedMessageId
      }
    default:
      return state
  }
}