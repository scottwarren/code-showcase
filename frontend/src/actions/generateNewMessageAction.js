import getRequest from './getRequest'

export const generateNewMessageAction = () => async dispatch => {
  const data = await getRequest('http://localhost:3001/messages/generate', { method: 'POST' })

  dispatch({
    type: 'GENERATE_NEW_MESSAGE',
    payload: data.message,
  })
}