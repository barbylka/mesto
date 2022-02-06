export class Card {
  constructor(data, handleCardClick, cardSelector) {
    this._name = data.name;
    this._alt = `Панорама ${data.name}`;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
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
    const cardImg = this._element.querySelector('.places__img');
    cardImg.alt = this._alt;
    cardImg.src = this._link;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.places__like').addEventListener('click', () => {
      this._toggleLike();
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

  _removeCard() {
    this._element.remove();
    this._element = null;
  }
}