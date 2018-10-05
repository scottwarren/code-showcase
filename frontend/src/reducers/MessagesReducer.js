export default (state = {}, action) => {
  switch (action.type) {
   case 'GENERATE_NEW_MESSAGE':
    return {
      messages: [],
    }
   default:
    return state
  }
 }