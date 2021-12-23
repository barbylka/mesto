/* forms validation */

const showInputError = (formItem, inputItem, inputErrorClass, errorClass, errorMessage) => {
  const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
  inputItem.classList.add(inputErrorClass);
  errorItem.textContent = errorMessage;
  errorItem.classList.add(errorClass);
};

const hideInputError = (formItem, inputItem, inputErrorClass, errorClass) => {
  const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
  inputItem.classList.remove(inputErrorClass);
  errorItem.classList.remove(errorClass);
  errorItem.textContent = '';
}

const checkInputValidity = (formItem, inputItem, inputErrorClass, errorClass) => {
  if (!inputItem.validity.valid) {
    showInputError(formItem, inputItem, inputErrorClass, errorClass, inputItem.validationMessage);
  } else {
    hideInputError (formItem, inputItem, inputErrorClass, errorClass);
  }
};

function hasInvalidInput (inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
}

function toggleButtonState (inputList, buttonItem, inactiveButtonClass) {
  if(hasInvalidInput(inputList)) {
    buttonItem.classList.add(inactiveButtonClass);
  } else {
    buttonItem.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formItem, inputSelector, inputErrorClass, errorClass, submitButtonSelector, inactiveButtonClass) => {
  const inputList = Array.from(formItem.querySelectorAll(inputSelector));
  const saveButton = formItem.querySelector(submitButtonSelector);
  
  toggleButtonState(inputList, saveButton, inactiveButtonClass);
  inputList.forEach((inputItem) => {
    inputItem.addEventListener('input', function () {
      checkInputValidity(formItem, inputItem, inputErrorClass, errorClass);
      toggleButtonState(inputList, saveButton, inactiveButtonClass);
      
    });
  });
};

function enableValidation ({ formSelector, inputSelector, inputErrorClass, errorClass, submitButtonSelector, inactiveButtonClass }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formItem) => {
    formItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })

    setEventListeners(formItem, inputSelector, inputErrorClass, errorClass, submitButtonSelector, inactiveButtonClass);
  })
}
enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
});

