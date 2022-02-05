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

const cardsList = new Section({
  items: initialPlaces,
  renderer: item => {
    const card = new Card(item, 
      () => {
        new PopupWithImage(popupPic).open(item)
      },
      '.places-template_type_default');
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement);
  }
}, placesList);
cardsList.renderItems();

/* edit form submit */

const user = new UserInfo(header, job);

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

/* add form submit */

const formAdd = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const card = new Card(formData, 
      () => {
        new PopupWithImage(popupPic).open(formData)
      },
      '.places-template_type_default')
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
  }
})

addBtn.addEventListener('click', () => {
  formAdd.open();
  addFormValid.toggleButtonState();
});