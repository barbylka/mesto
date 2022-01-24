/* forms validation */

export class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._element = formElement;
    this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
    this._saveButton = this._element.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }  

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem);
        this.toggleButtonState();
      })
    })
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    })
  }

  toggleButtonState() {
    if(this._hasInvalidInput()) {
      this._saveButton.setAttribute('disabled', true);
      this._saveButton.classList.add(this._inactiveButtonClass);
      
    } else {
      this._saveButton.classList.remove(this._inactiveButtonClass);
      this._saveButton.removeAttribute('disabled');
    }
  }

  _checkInputValidity(inputItem) {
    if (!inputItem.validity.valid) {
      this._showInputError(inputItem);
    } else {
      this._hideInputError(inputItem);
    }
  }

  _showInputError(inputItem) {
    const errorItem = this._element.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.add(this._inputErrorClass);
    errorItem.textContent = inputItem.validationMessage;
    errorItem.classList.add(this._errorClass);
  }

  _hideInputError(inputItem) {
    const errorItem = this._element.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.remove(this._inputErrorClass);
    errorItem.classList.remove(this._errorClass);
    errorItem.textContent = "";
  }
}