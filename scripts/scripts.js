function touchLike() {
  let allLikes = document.querySelectorAll('.places__like');
  for (let i = 0; i < allLikes.length; i++) {
    const likeIcon = allLikes[i];
    likeIcon.addEventListener('click', function() {
      if (likeIcon.classList.contains('places__like_active')) {
        likeIcon.classList.remove('places__like_active');
      } else {
        likeIcon.classList.add('places__like_active');
      }
    })
  }
}

touchLike();

let editBtn = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let body = document.querySelector('.root');
let exitBtn = document.querySelector('.popup__exit-button');

function openPopup() {
  popup.classList.add('popup_opened');
  body.classList.add('root_hidden');
}

editBtn.addEventListener('click', openPopup);

let formElement = document.querySelector('.popup__container');
let header = document.querySelector('.profile__cont-info-name');
let job = document.querySelector('.profile__cont-info-description');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_description');

nameInput.value = header.textContent;
jobInput.value = job.textContent;

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');
  
  header.textContent = nameInput.value;
  job.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);

function closePopup() {
  popup.classList.remove('popup_opened');
  body.classList.remove('root_hidden');
  nameInput.value = header.textContent;
  jobInput.value = job.textContent;
}
exitBtn.addEventListener('click', closePopup);