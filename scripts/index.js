/* add cards + call pic-popup */

const placesList = document.querySelector('.places__items');
const placesTemplate = document.querySelector('.places-template').content;
const placesDesc = document.querySelector('.places__description');

const initialPlaces = [
  {
    name: 'Карачаево-Черкессия',
    alt: 'Панорама Карачаевска.',
    link: './images/karachaevo-cherk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    alt: 'Гора Эльбрус.',
    link: './images/elbrus.jpg'
  },
  {
    name: 'Горный Алтай',
    alt: 'Панорама леса и гор Алтая.',
    link: './images/altai.jpg'
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
}

exitBtns.forEach(btn => {
  btn.addEventListener('click', () => closePopup(btn.closest('.popup')));
});

const popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
  document.addEventListener('keydown', function (evt) {
    const key = evt.key;
    if (key === 'Escape') {
    closePopup(popup);
    }
  })
})

const popupOverlays = document.querySelectorAll('.popup__overlay');

popupOverlays.forEach(overlay => {
  overlay.addEventListener('click', () => closePopup(overlay.closest('.popup')));
})

/* create & add card func */

function createCard(name, alt, link) {
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

  placesElement.querySelector('.places__img').addEventListener('click', function () {
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
}

addForm.addEventListener('submit', submitCreateCardForm);