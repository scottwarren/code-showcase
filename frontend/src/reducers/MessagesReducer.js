const initialState = {
  messages: [],
}

export default (state = initialState, action) => {
  console.log('action.type: ', action.type)
  switch (action.type) {
    case 'GENERATE_NEW_MESSAGE':      
      return {
        messages: [
          ...state.messages,
          action.payload,
        ],
      }
    default:
      return state
  }
}