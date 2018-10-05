export default (state = [], action) => {
  switch (action.type) {
    case 'GENERATE_NEW_MESSAGE':
      return [
        ...state,
        action.payload,
      ]
    case 'GET_MESSAGES':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}