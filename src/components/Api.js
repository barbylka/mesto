export default class Api{
  constructor(args){
    this._baseUrl = args.baseUrl;
    this._headers = args.headers;
  }

  getUserInfo(){
    return fetch(this._baseUrl + '/users/me', 
      {
        headers: {
          'Authorization': this._headers.authorization,
          'Content-Type': this._headers.contentType
        }
      }
    )
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards',
    {
      headers: {
        'Authorization': this._headers.authorization,
        'Content-Type': this._headers.contentType
      }
    })
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
          name: data.user,
          about: data.job,
        })
      }
    )
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
    })
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
    )
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
    )
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
    )
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
  )}
}