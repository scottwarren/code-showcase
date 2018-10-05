export default async (url, fetchOptions = {}) => {
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