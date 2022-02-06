import './index.css';
import { initialPlaces, dataValidator, editForm, addForm, popupPic, header, job, placesList, editBtn, addBtn, nameInput, jobInput, popupAdd, popupEdit } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

/* swith on the forms validation */

const editFormValid = new FormValidator(dataValidator, editForm);
editFormValid.enableValidation();

const addFormValid = new FormValidator(dataValidator, addForm);
addFormValid.enableValidation();

/* add cards + call pic-popup */

const imgPopup = new PopupWithImage(popupPic);
imgPopup.setEventListeners();

function createCard(el) {
  const card = new Card(el, 
    () => {
      imgPopup.open(el);
    },
    '.places-template_type_default')
  return card;
}

const cardsList = new Section({
  items: initialPlaces,
  renderer: item => {
    const cardElement = createCard(item).generateCard();
    cardsList.addItem(cardElement);
  }
}, placesList);
cardsList.renderItems();

/* edit form submit */

const user = new UserInfo(header, job);

/* formEdit reset in PopupWithForm.js line #23 */

editBtn.addEventListener('click', () => {
  user.getUserInfo();
  nameInput.value = user.getUserInfo().user;
  jobInput.value = user.getUserInfo().job;
  formEdit.open();
  editFormValid.toggleButtonState();
});

const formEdit = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (formData) => {
    user.setUserInfo(formData);
  }
})
formEdit.setEventListeners();

/* add form submit */

const formAdd = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const cardElement = createCard(formData).generateCard();
    cardsList.addItem(cardElement);
  }
})
formAdd.setEventListeners();

/* formAdd reset in PopupWithForm.js line #23 */
addBtn.addEventListener('click', () => {
  formAdd.open();
  addFormValid.toggleButtonState();
});