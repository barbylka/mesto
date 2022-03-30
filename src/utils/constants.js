const dataValidator = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
}

const popupPic = document.querySelector('.popup_type_pic');
const avatar = document.querySelector('.profile__image');
const placesList = document.querySelector('.places__items');
const editBtn = document.querySelector('.profile__button_type_edit');
const addBtn = document.querySelector('.profile__button_type_add');
const header = document.querySelector('.profile__cont-info-name');
const job = document.querySelector('.profile__cont-info-description');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_description');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupDel = document.querySelector('.popup_type_delete');
const popupAva = document.querySelector('.popup_type_avatar');
const avaForm = document.querySelector('.popup__container_type_avatar');
const editForm = document.querySelector('.popup__container_type_edit');
const addForm = document.querySelector('.popup__container_type_add');
const ESC_CODE = 'Escape';

export { popupDel, avatar, popupAva, avaForm, dataValidator, popupPic, placesList, editBtn, addBtn, header, job, nameInput, jobInput, popupEdit, popupAdd, editForm, addForm, ESC_CODE }