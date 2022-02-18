const karachaevo = new URL('../images/karachaevo-cherk.jpg', import.meta.url);
const elbrus = new URL('../images/elbrus.jpg', import.meta.url);
const altai = new URL('../images/altai.jpg', import.meta.url);
const adirondack = new URL('../images/adirondack-mountains.jpg', import.meta.url);
const logoadofogo = new URL('../images/logoa-do-fogo.jpg', import.meta.url);
const yosemite = new URL('../images/yosemite.jpg', import.meta.url);


const initialPlaces = [
  {
    name: 'Карачаево-Черкессия',
    link: karachaevo
  },
  {
    name: 'Гора Эльбрус',
    link: elbrus
  },
  {
    name: 'Горный Алтай',
    link: altai
  },
  {
    name: 'Горы Адирондак',
    link: adirondack
  },
  {
    name: 'Лагоа-ду-Фогу',
    link: logoadofogo
  },
  {
    name: 'Йосемити Национальный парк',
    link: yosemite
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
const popupDel = document.querySelector('.popup_type_delete');
const editForm = document.querySelector('.popup__container_type_edit');
const addForm = document.querySelector('.popup__container_type_add');
const ESC_CODE = 'Escape';

export { initialPlaces, popupDel, dataValidator, popupPic, placesList, editBtn, addBtn, header, job, nameInput, jobInput, popupEdit, popupAdd, editForm, addForm, ESC_CODE }