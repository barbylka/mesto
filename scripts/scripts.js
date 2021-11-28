let allLikes = document.querySelectorAll('.places__like');

for (let i = 0; i < allLikes.length; i++) {
  const likeIcon = allLikes[i];
  
  likeIcon.addEventListener('click', function() {
    if (likeIcon.getAttribute('src') == './images/like.svg') likeIcon.setAttribute('src', './images/black-like.svg');
    else likeIcon.setAttribute('src', './images/like.svg');
  })
}


let editBtn = document.querySelector('.profile__cont-edit-button');
let popup = document.querySelector('.popup');
let body = document.querySelector('.root');
let exitBtn = document.querySelector('.popup__exit-button');

function openPopup() {
  popup.classList.add('popup_opened');
  body.classList.add('root_hidden');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  body.classList.remove('root_hidden');
}

editBtn.addEventListener('click', openPopup);
exitBtn.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__container');
let header = document.querySelector('.profile__cont-info-name');
let job = document.querySelector('.profile__cont-info-description');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_description');

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');
  
  header.textContent = nameInput.value;
  job.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);