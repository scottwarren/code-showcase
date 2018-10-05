export default (state = [], action) => {
  console.log('action.type: ', action.type)
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