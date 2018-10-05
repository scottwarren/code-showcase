const getRequest = async (url, fetchOptions = {}) => {
  console.log('fetch options: ', fetchOptions)
  let data = await (await (fetch(url, fetchOptions)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log('Error: ', err)
    })
  ))

  return data
}

export const generateNewMessageAction = () => async dispatch => {
  const data = await getRequest('http://localhost:3001/messages/generate', { method: 'POST' })


  dispatch({
    type: 'GENERATE_NEW_MESSAGE',
    payload: data.message,
  })
}