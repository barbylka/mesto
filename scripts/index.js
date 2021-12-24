/* add cards + call pic-popup */
import {initialPlaces} from './places.js';

const placesList = document.querySelector('.places__items');
const placesTemplate = document.querySelector('.places-template').content;
const placesDesc = document.querySelector('.places__description');

const editBtn = document.querySelector('.profile__button_type_edit');
const addBtn = document.querySelector('.profile__button_type_add');
const body = document.querySelector('.root');
const header = document.querySelector('.profile__cont-info-name');
const job = document.querySelector('.profile__cont-info-description');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_description');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupPic = document.querySelector('.popup_type_pic');
const popupPicTitle = document.querySelector('.popup__pic-title');
const popupImg = document.querySelector('.popup__img');
const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_link');
const editForm = document.querySelector('.popup__container_type_edit');
const addForm = document.querySelector('.popup__container_type_add');
const exitBtns = document.querySelectorAll('.popup__exit-button'); 

/* close popups */

function closePopup(popUp) {
  popUp.classList.remove('popup_opened');
  body.classList.remove('root_hidden');
  document.removeEventListener('keydown', closeByEsc);
}

exitBtns.forEach(btn => {
  btn.addEventListener('click', () => closePopup(btn.closest('.popup')));
});

const popups = document.querySelectorAll('.popup');
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

/* create & add card func */

function createCard(name, alt, link) {
  const placesElement = placesTemplate.cloneNode(true);
  const placesImg = placesElement.querySelector('.places__img');

  placesElement.querySelector('.places__title').textContent = name;
  placesImg.alt = alt;
  placesImg.src = link;
  
  placesElement.querySelector('.places__like').addEventListener('click', evt => {
    evt.target.classList.toggle('places__like_active');
  });

  placesElement.querySelector('.places__delete').addEventListener('click', evt => {
    evt.target.closest('.places__item').remove();
  })

  placesImg.addEventListener('click', function () {
    popupPicTitle.textContent = name;
    popupImg.alt = alt;
    popupImg.src = link;

    openPopup(popupPic);
  })
  return placesElement;
}

function addCardPrepend(item) {
  placesList.prepend(item);
};

initialPlaces.forEach(element => addCardPrepend(createCard(element.name, element.alt, element.link)));

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
});

addBtn.addEventListener('click', () => {
  openPopup(popupAdd);
  initialAddInputs();
});

/* both forms submit */

function submitEditProfileForm(evt) {
  evt.preventDefault();
  
  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  header.textContent = nameInput.value;
  job.textContent = jobInput.value;
  
  closePopup(popupEdit);
}

editForm.addEventListener('submit', submitEditProfileForm);

function submitCreateCardForm(evt) {
  evt.preventDefault();
  
  placeInput.getAttribute('value');
  linkInput.getAttribute('.value');

  addCardPrepend(createCard(placeInput.value, placeInput.value, linkInput.value));
  
  placeInput.value = '';
  linkInput.value = '';
  closePopup(popupAdd);
  popupAdd.querySelector('.popup__save-button').setAttribute('disabled', true);
}

addForm.addEventListener('submit', submitCreateCardForm);