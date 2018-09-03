import _isoFetch from 'isomorphic-fetch'


const isBrowser = () => typeof window !== 'undefined'
export const isoFetch = (path, options) => _isoFetch('http://localhost:8080' + path, options) // pathToURL(path)

const jsonBody = body => ({
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

export const postWithJSONBody = body => ({
  method: 'POST',
  ...jsonBody(body)
})

export const deleteRequest = () => ({
  method: 'DELETE'
})

export const putRequestWithJSONBody = body => ({
  method: 'PUT',
  ...jsonBody(body)
})