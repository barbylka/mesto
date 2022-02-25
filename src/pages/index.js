import './index.css';
import { popupDel, dataValidator, avatar, popupAva, avaForm, editForm, addForm, popupPic, header, job, placesList, editBtn, addBtn, nameInput, jobInput, popupAdd, popupEdit } from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js';
let me = "";
const user = new UserInfo(header, job);

/* get User Info and cards from server */

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36',
  headers: {
    authorization: 'f861a342-fb37-479b-9fd3-3266cbaf664f',
    contentType: 'application/json'
  }
})

const cardsList = new Section(
  item => {
    const cardElement = createCard(item).generateCard();
    cardsList.addItem(cardElement);
  }, 
  placesList
)

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([ userData, cards]) => {
    user.setUserInfo(userData);
    avatar.style.backgroundImage = `url(${userData.avatar})`;
    me = userData._id;
    cardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

/* swith on the forms validation */

const editFormValid = new FormValidator(dataValidator, editForm);
editFormValid.enableValidation();

const addFormValid = new FormValidator(dataValidator, addForm);
addFormValid.enableValidation();

const avaFormValid = new FormValidator(dataValidator, avaForm);
avaFormValid.enableValidation();

/* add cards + call pic-popup */

const imgPopup = new PopupWithImage(popupPic);
imgPopup.setEventListeners();

const delPopup = new PopupWithConfirm(popupDel)
delPopup.setEventListeners();

function createCard(el) {
  const card = new Card(el, 
    () => {
      imgPopup.open(el);
    },
    '.places-template_type_default',
    () => {
      delPopup.open(
        () => {
          api.deleteCard(el._id)
            .then(() => {
              card.deleteCard()
              delPopup.close();
            })
            .catch((err) => {
              console.log(`Не получилось удалить карточку: ${err}`)
            })
        });
    },
    () => {
      api.likeCard(el._id)
        .then((data) => {
          card.updateLikes(data.likes);
        })
        .catch((err) => {
          {
            console.log(`Не удалось лайкнуть: ${err}`)
          }
        })
    },
    () => {
      api.dislikeCard(el._id)
      .then((data) => {
        card.updateLikes(data.likes);
      })
      .catch((err) => {`Лайк не хочет уходить, ошибка: ${err}`})
    },
    me
  )
  return card;
}

/* edit form submit */

editBtn.addEventListener('click', () => {
  const userData = user.getUserInfo();
  nameInput.value = userData .user;
  jobInput.value = userData .job;
  formEdit.open();
  formEdit.setButtonText('Сохранить');
  editFormValid.toggleButtonState();
});

const formEdit = new PopupWithForm({
  popupElement: popupEdit,
  handleFormSubmit: (formData) => {
    api.updateUserInfo(formData)
      .then((res) => {
        user.setUserInfo(res);
        formEdit.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }
})
formEdit.setEventListeners();

/* add form submit */

const formAdd = new PopupWithForm({
  popupElement: popupAdd,
  handleFormSubmit: (formData) => {
    api.postCard(formData)
      .then((res) => {
        const cardElement = createCard(res).generateCard();
        formAdd.close();
        cardsList.addItem(cardElement);
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }
})
formAdd.setEventListeners();

addBtn.addEventListener('click', () => {
  formAdd.open();
  formAdd.setButtonText('Создать');
  addFormValid.toggleButtonState();
});

/* avatar form submit */

const formAvatar = new PopupWithForm({
  popupElement: popupAva,
  handleFormSubmit: (formData) => {
    api.updateAvatar(formData)
      .then(() => {
        avatar.style.backgroundImage = `url(${formData.avatar})`;
        formAvatar.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }
})
formAvatar.setEventListeners();
avatar.addEventListener('click', () => {
  formAvatar.open();
  formAvatar.setButtonText('Сохранить');
  avaFormValid.toggleButtonState();
})