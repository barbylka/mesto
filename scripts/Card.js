export class Card {
  constructor(name, alt, link, cardSelector) {
    this._name = name;
    this._alt = alt;
    this._link = link;
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
    this._element.querySelector('.places__img').alt = this._alt;
    this._element.querySelector('.places__img').src = this._link;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.places__like').addEventListener('click', () => {
      this._toggleLike();
    });

    this._element.querySelector('.places__delete').addEventListener('click', () => {
      this._removeCard();
    });
  }

  _toggleLike() {
    this._element.querySelector('.places__like').classList.toggle('places__like_active');
  }

  _removeCard() {
    this._element.querySelector('.places__delete').closest('.places__item').remove();
  }
}