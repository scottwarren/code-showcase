import getRequest from './getRequest'

export const getMessagesAction = () => async dispatch => {
  const data = await getRequest('http://localhost:3001/messages')

  dispatch({
    type: 'GET_MESSAGES',
    payload: data.messages,
  })
}