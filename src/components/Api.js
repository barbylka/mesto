export default class Api{
  constructor(args){
    this._baseUrl = args.baseUrl;
    this._headers = args.headers;
  }

  _checkResponse(res) {
    if(res.ok){
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  }

  getUserInfo(){
    return fetch(this._baseUrl + '/users/me', 
      {
        headers: {
          'Authorization': this._headers.authorization,
          'Content-Type': this._headers.contentType
        }
      }
    ).then(res => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards',
    {
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      }
    }).then(res => this._checkResponse(res));
  }

  updateUserInfo(data) {
    return fetch(this._baseUrl + '/users/me',
      {
        method: 'PATCH',
        headers: {
          'Authorization': this._headers.authorization,
          'Content-Type': this._headers.contentType
        },
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        })
      }
    ).then(res => this._checkResponse(res));
  }

  updateAvatar(data) {
    return fetch(this._baseUrl + '/users/me/avatar',
    {
      method: 'PATCH',
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    }).then(res => this._checkResponse(res));
  }

  postCard(data) {
    return fetch(this._baseUrl + '/cards',
    {
      method: 'POST',
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    }
    ).then(res => this._checkResponse(res));
  }

  deleteCard(cardId){
    return fetch(this._baseUrl + `/cards/${cardId}`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      }
    }
    ).then(res => this._checkResponse(res));
  }

  likeCard(cardId){
    return fetch(this._baseUrl + `/cards/${cardId}/likes`,
    {
      method: 'PUT',
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      }
    }
    ).then(res => this._checkResponse(res));
  }

  dislikeCard(cardId){
    return fetch(this._baseUrl + `/cards/${cardId}/likes`,
    {
      method: 'DELETE',
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      }
    }
    ).then(res => this._checkResponse(res));
  }
}