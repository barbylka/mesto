import { initialPlaces } from './places.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popupPic = document.querySelector('.popup_type_pic');
const placesList = document.querySelector('.places__items');
const popupPicTitle = document.querySelector('.popup__pic-title');
const popupImg = document.querySelector('.popup__img');
const editBtn = document.querySelector('.profile__button_type_edit');
const addBtn = document.querySelector('.profile__button_type_add');
const body = document.querySelector('.root');
const header = document.querySelector('.profile__cont-info-name');
const job = document.querySelector('.profile__cont-info-description');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_description');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_link');
const editForm = document.querySelector('.popup__container_type_edit');
const addForm = document.querySelector('.popup__container_type_add');
const exitBtns = document.querySelectorAll('.popup__exit-button');

/* swith on the forms validation */

const dataValidator = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
}

const editFormValid = new FormValidator(dataValidator, editForm);
editFormValid.enableValidation();

const addFormValid = new FormValidator(dataValidator, addForm);
addFormValid.enableValidation();

/* close popups */

function closePopup(popUp) {
  popUp.classList.remove('popup_opened');
  body.classList.remove('root_hidden');
  document.removeEventListener('keydown', closeByEsc);
}

exitBtns.forEach(btn => {
  btn.addEventListener('click', () => closePopup(btn.closest('.popup')));
});

const ESC_CODE = 'Escape';

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const popupOverlays = document.querySelectorAll('.popup__overlay');

popupOverlays.forEach(overlay => {
  overlay.addEventListener('mousedown', () => closePopup(overlay.closest('.popup')));
})

/* open all popups */

function openPopup(popUp) {
  popUp.classList.add('popup_opened');
  body.classList.add('root_hidden');
  document.addEventListener('keydown', closeByEsc);
}

function initialEditInputs() {
  nameInput.value = header.textContent;
  jobInput.value = job.textContent;
}

function initialAddInputs() {
  placeInput.value = '';
  linkInput.value = '';
}

editBtn.addEventListener('click', () => {
  openPopup(popupEdit);
  initialEditInputs();
  editFormValid.toggleButtonState();
});

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
  initialAddInputs();
  addFormValid.toggleButtonState();
});

/* add cards + call pic-popup */

function addCardPrepend(item) {
  placesList.prepend(item);
};

export function openCard(name, alt, link) {
  popupPicTitle.textContent = name;
  popupImg.alt = alt;
  popupImg.src = link;

  openPopup(popupPic);
}

function createCard(name, alt, link, cardSelector) {
  const card = new Card(name, alt, link, cardSelector);
  const cardElement = card.generateCard();

  return cardElement;
}

initialPlaces.forEach(element => addCardPrepend(createCard(element.name, element.alt, element.link, '.places-template_type_default')));



/* both forms submit */

function submitEditProfileForm(evt) {
  evt.preventDefault();
  
  header.textContent = nameInput.value;
  job.textContent = jobInput.value;
  
  closePopup(popupEdit);
}

editForm.addEventListener('submit', submitEditProfileForm);

function submitCreateCardForm(evt) {
  evt.preventDefault();
  
  addCardPrepend(createCard(placeInput.value, placeInput.value, linkInput.value, '.places-template_type_default'));
  
  addForm.reset();
  closePopup(popupAdd);
  addFormValid.toggleButtonState();
}

addForm.addEventListener('submit', submitCreateCardForm);