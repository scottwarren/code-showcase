import getRequest from './getRequest'

import { getMessagesAction } from './getMessagesAction'

export const selectMessageAction = id => async dispatch => {
  // Hit API to mark message as read
  await getRequest(`http://localhost:3001/messages/${id}/read`, { method: 'PATCH' })
  
  // Fetch the messages now that we've updated a message's status, so we have the true state
  await getMessagesAction()(dispatch)

  dispatch({
    type: 'SELECT_MESSAGE',
    payload: {
      selectedMessageId: id,
    },
  })

}
