import { ESC_CODE } from '../utils/constants.js'

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.querySelector('.root').classList.remove('root_hidden');
    this._popupSelector.removeEventListener('keydown', this._handleEscClose);
  }  

  setEventListeners() {
    this._popupSelector.querySelector('.popup__exit-button').addEventListener('click', () => {
      this.close();
    })

    this._popupSelector.querySelector('.popup__overlay').addEventListener('mousedown', () => {
      this.close();
    })
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.querySelector('.root').classList.add('root_hidden');
    document.addEventListener('keydown', this._handleEscClose)
  }
}