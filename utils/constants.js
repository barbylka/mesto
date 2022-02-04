const initialPlaces = [
  {
    name: 'Карачаево-Черкессия',
    link: './images/karachaevo-cherk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Горный Алтай',
    link: './images/altai.jpg'
  },
  {
    name: 'Горы Адирондак',
    link: './images/adirondack-mountains.jpg'
  },
  {
    name: 'Лагоа-ду-Фогу',
    link: './images/logoa-do-fogo.jpg'
  },
  {
    name: 'Йосемити Национальный парк',
    link: './images/yosemite.jpg'
  },
];

const dataValidator = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
}

const popupPic = document.querySelector('.popup_type_pic');
const placesList = document.querySelector('.places__items');
const editBtn = document.querySelector('.profile__button_type_edit');
const addBtn = document.querySelector('.profile__button_type_add');
const header = document.querySelector('.profile__cont-info-name');
const job = document.querySelector('.profile__cont-info-description');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_description');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const editForm = document.querySelector('.popup__container_type_edit');
const addForm = document.querySelector('.popup__container_type_add');

export { initialPlaces, dataValidator, popupPic, placesList, editBtn, addBtn, header, job, nameInput, jobInput, popupEdit, popupAdd, editForm, addForm }