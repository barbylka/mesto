export class Card {
  constructor({ name, link, likes = [], owner }, handleCardClick, cardSelector, removeCard, likeCard, dislikeCard, me) {
    this._name = name;
    this._alt = `Панорама ${name}`;
    this._link = link;
    this._likes = likes;
    this._owner = owner._id;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._removeCard = removeCard;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
    this._me = me;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.places__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.places__title').textContent = this._name;
    
    this._likes.forEach((like) => {
      if(like["_id"] === this._me){
        this._element.querySelector('.places__like').classList.add('places__like_active')
      }
    })
    this._element.querySelector('.places__like-number').textContent = this._likes.length;
    const cardImg = this._element.querySelector('.places__img');
    cardImg.alt = this._alt;
    cardImg.src = this._link;
    if (!(this._owner === this._me)){
      this._element.querySelector('.places__delete').remove();
    }
    return this._element;
  }

  deleteCard(){
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    const like = this._element.querySelector('.places__like');

    like.addEventListener('click', () => {
      if(like.classList.contains('places__like_active')){
        this._dislikeCard();
      } else {this._likeCard()}

    });

    this._element.querySelector('.places__delete').addEventListener('click', () => {
      this._removeCard();
    });

    this._element.querySelector('.places__img').addEventListener('click', () => {
      this._handleCardClick();
    })
  }

  updateLikes(arr){
    this._toggleLike();
    this._element.querySelector('.places__like-number').textContent = arr.length;
  }

  _toggleLike() {
    this._element.querySelector('.places__like').classList.toggle('places__like_active');
  }
}