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

initialPlaces.forEach(function (element) {
  const placesElement = placesTemplate.cloneNode(true);

  placesElement.querySelector('.places__title').textContent = element.name;
  placesElement.querySelector('.places__img').alt = element.alt;
  placesElement.querySelector('.places__img').src = element.link;

  placesList.append(placesElement)
})

function touchLike() {
  let allLikes = document.querySelectorAll('.places__like');
  for (let i = 0; i < allLikes.length; i++) {
    const likeIcon = allLikes[i];
    likeIcon.addEventListener('click', function () {
      if (likeIcon.classList.contains('places__like_active')) {
        likeIcon.classList.remove('places__like_active');
      } else {
        likeIcon.classList.add('places__like_active');
      }
    })
  }
}

touchLike();

const deleteBtns = document.querySelectorAll('.places__delete');

deleteBtns.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    const placeItm = eventTarget.closest('.places__item');
    placeItm.remove();
  })
})



let editBtn = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let body = document.querySelector('.root');
let header = document.querySelector('.profile__cont-info-name');
let job = document.querySelector('.profile__cont-info-description');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_description');
let exitBtn = document.querySelector('.popup__exit-button');

function togglePopup() {
  if (!popup.classList.contains('popup_opened')) {
    nameInput.value = header.textContent;
    jobInput.value = job.textContent;
  }
  
  popup.classList.toggle('popup_opened');
  body.classList.toggle('root_hidden');
}

editBtn.addEventListener('click', togglePopup);
exitBtn.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  header.textContent = nameInput.value;
  job.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', togglePopup);