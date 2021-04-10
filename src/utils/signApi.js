class SignApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getPrifile(token) {

    return fetch(`${this._baseUrl}/users/me `, {
      method: 'GET',
      headers: {...this._headers, 'Authorization': `Bearer ${token}`}
    })
      .then(this._checkResponse);
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

}

const signApi = new SignApi({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    "Content-Type": "application/json"
  }
});

export default signApi;