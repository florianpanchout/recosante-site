export default {
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  },
  get(endpoint) {
    return fetch(endpoint)
      .then(this.handleErrors)
      .then((res) => res.json())
  },
  post(endpoint, body) {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(this.handleErrors)
      .then((res) => res.json())
  },
  fetch(endpoint, body) {
    return body ? this.post(endpoint, body) : this.get(endpoint)
  },
}
