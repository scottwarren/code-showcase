import getRequest from './getRequest'

export const selectMessageAction = id => dispatch => {
  // Hit API to mark message as read
  getRequest(`http://localhost:3001/messages/${id}/read`, { method: 'PATCH' })

  dispatch({
    type: 'SELECT_MESSAGE',
    payload: {
      selectedMessageId: id,
    },
  })
}
