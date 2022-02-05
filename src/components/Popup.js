export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose(evt) {
    const ESC_CODE = 'Escape';

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

    this._popupSelector.querySelector('.popup__overlay').addEventListener('click', () => {
      this.close();
    })

    document.addEventListener('keydown', evt => this._handleEscClose(evt))
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.querySelector('.root').classList.add('root_hidden');
    this.setEventListeners();
  }
}