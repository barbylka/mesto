import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupElement, handleFormSubmit }) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll('.popup__text');
    this._form = this._popupElement.querySelector('.popup__container');
    this._submitButton = this._popupElement.querySelector('.popup__save-button');
  }

  setButtonText(text) {
    this._submitButton.textContent = text;
  }

  _getInputValues() {
    this._formInputs = {};

    this._inputList.forEach(input => {
      this._formInputs[input.name] = input.value;
    })

    return this._formInputs;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.setButtonText('Сохранение...');
      this._handleFormSubmit(this._getInputValues());
    })
  }

}