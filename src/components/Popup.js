import { ESC_CODE } from '../utils/constants.js'

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.querySelector('.root').classList.remove('root_hidden');
    this._popupElement.removeEventListener('keydown', this._handleEscClose);
  }  

  setEventListeners() {
    this._popupElement.querySelector('.popup__exit-button').addEventListener('click', () => {
      this.close();
    })

    this._popupElement.querySelector('.popup__overlay').addEventListener('mousedown', () => {
      this.close();
    })
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.querySelector('.root').classList.add('root_hidden');
    document.addEventListener('keydown', this._handleEscClose)
  }
}