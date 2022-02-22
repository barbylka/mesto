export class Card {
  constructor({ name, link, likes = []}, handleCardClick, cardSelector, removeCard, likeCard, dislikeCard) {
    this._name = name;
    this._alt = `Панорама ${name}`;
    this._link = link;
    this._like = likes;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._removeCard = removeCard;
    this._likeCard = likeCard;
    this._dislikeCard = dislikeCard;
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
    this._element.querySelector('.places__like-number').textContent = this._like.length;
    const cardImg = this._element.querySelector('.places__img');
    cardImg.alt = this._alt;
    cardImg.src = this._link;

    return this._element;
  }

  _setEventListeners() {
    const like = this._element.querySelector('.places__like');

    like.addEventListener('click', () => {
      this._toggleLike();
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

  _toggleLike() {
    this._element.querySelector('.places__like').classList.toggle('places__like_active');
  }
}