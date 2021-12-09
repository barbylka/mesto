const placesList = document.querySelector('.places__items');
const placesTemplate = document.querySelector('.places-template').content;
const placesDesc = document.querySelector('.places__description');

const initialPlaces = [
  {
    name: 'Карачаево-Черкессия',
    alt: 'Панорама Карачаевска.',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    alt: 'Гора Эльбрус.',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Домбай',
    alt: 'Панорама леса и гор Домбай.',
    link: './images/dombai.jpg'
  },
  {
    name: 'Горы Адирондак',
    alt: 'Панорама гор Адирондак с высоты птичьего полета.',
    link: './images/adirondack-mountains.jpg'
  },
  {
    name: 'Лагоа-ду-Фогу',
    alt: 'Закат на Лагоа-ду-Фогу.',
    link: './images/logoa-do-fogo.jpg'
  },
  {
    name: 'Йосемити Национальный парк',
    alt: 'Горная панорама в Йосемити.',
    link: './images/yosemite.jpg'
  }
];

function addCard(name, alt, link) {
  const placesElement = placesTemplate.cloneNode(true);

  placesElement.querySelector('.places__title').textContent = name;
  placesElement.querySelector('.places__img').alt = alt;
  placesElement.querySelector('.places__img').src = link;

  placesElement.querySelector('.places__like').addEventListener('click', evt => {
    evt.target.classList.toggle('places__like_active');
  });

  placesElement.querySelector('.places__delete').addEventListener('click', evt => {
    evt.target.closest('.places__item').remove();
  })

  placesList.prepend(placesElement);
}

initialPlaces.forEach(element => addCard(element.name, element.alt, element.link))

/* profile edit popup */

let editBtn = document.querySelector('.profile__button_type_edit');
let addBtn = document.querySelector('.profile__button_type_add');
let body = document.querySelector('.root');
let header = document.querySelector('.profile__cont-info-name');
let job = document.querySelector('.profile__cont-info-description');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_description');
let exitBtns = document.querySelectorAll('.popup__exit-button');

function togglePopup(popupClass) {
  const popup = document.querySelector(popupClass);
  if (popupClass === '.popup_type_edit' && !popup.classList.contains('popup_opened')) {
    nameInput.value = header.textContent;
    jobInput.value = job.textContent;
  }
  
  popup.classList.toggle('popup_opened');
  body.classList.toggle('root_hidden');
}

editBtn.addEventListener('click', () => togglePopup('.popup_type_edit'));
addBtn.addEventListener('click', () => togglePopup('.popup_type_add'));

exitBtns.forEach(btn => {
  btn.addEventListener('click', () => togglePopup('.' + btn.parentElement.parentElement.classList[1]));
});

let formElements = document.querySelectorAll('.popup__container');
const placeInput = document.querySelector('.popup__text_type_place');
const linkInput = document.querySelector('.popup__text_type_link');

function formSubmitHandler(evt, form) {
  evt.preventDefault();
  const popup = form.parentElement;
  if (popup.classList.contains('popup_type_edit')) {
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

    header.textContent = nameInput.value;
    job.textContent = jobInput.value;
  } else {
    placeInput.getAttribute('value');
    linkInput.getAttribute('.value');

    addCard(placeInput.value, placeInput.value, linkInput.value);
    
    placeInput.value = '';
    linkInput.value = '';
  }
}

formElements.forEach(function (form) {
  form.addEventListener('submit', evt => formSubmitHandler(evt, form));
  form.addEventListener('submit', () => togglePopup('.' + form.parentElement.classList[1]));
})