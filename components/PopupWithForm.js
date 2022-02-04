import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__text');

    this._formInputs = {};

    this._inputList.forEach(input => {
      this._formInputs[input.name] = input.value;
    })

    return this._formInputs;
  }

  close() {
    super.close();
    this._popupSelector.querySelector('.popup__container').reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      super.close();
    })
  }

}