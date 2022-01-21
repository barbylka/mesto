/* forms validation */

export class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._element = formElement;
  }

  enableValidation() {
   this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }  

  _setEventListeners() {
    const inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
    const saveButton = this._element.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, saveButton);
    inputList.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem);
        this._toggleButtonState(inputList, saveButton);
      })
    })
  }

  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    })
  }

  _toggleButtonState(inputList, buttonItem) {
    if(this._hasInvalidInput(inputList)) {
      buttonItem.classList.add(this._inactiveButtonClass);
      buttonItem.setAttribute('disabled', true);
    } else {
      buttonItem.classList.remove(this._inactiveButtonClass);
      buttonItem.removeAttribute('disabled');
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