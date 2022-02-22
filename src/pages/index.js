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

/* get User Info and cards from server */

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36',
  headers: {
    authorization: 'f861a342-fb37-479b-9fd3-3266cbaf664f',
    contentType: 'application/json'
  }
})

api.getUserInfo()
  .then((res) => {
    if(res.ok){
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  })
  .then((res) => {
    header.textContent = res.name;
    job.textContent = res.about;
    avatar.style.backgroundImage = `url(${res.avatar})`;
    me = res._id;
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })
  
api.getInitialCards()
  .then((res) => {
    if(res.ok){
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  })
  .then((res) => {
      const cardsList = new Section({
        items: res,
        renderer: item => {
          const cardElement = createCard(item).generateCard();
          if (!(item.owner._id === me)){
            cardElement.querySelector('.places__delete').remove();
          }
          cardsList.addItem(cardElement);
        }
      }, placesList);
      cardsList.renderItems();
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

function createCard(el) {
  const card = new Card(el, 
    () => {
      imgPopup.open(el);
    },
    '.places-template_type_default',
    () => {
      const delPopup = new PopupWithConfirm(popupDel,
        () => {
          api.deleteCard(el._id)
          .then((res) => {
            if(res.ok){
              return res.json()
            } else {
              return Promise.reject(res.status)
            }
          })
          .catch((err) => {
            console.log(`Не получилось удалить карточку: ${err}`)
          })
        });
      delPopup.setEventListeners(card._element);
      delPopup.open();
    },
    () => {
      api.dislikeCard(el._id)
      .then((res) => {
        if(res.ok){
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
    })
      .then((data) => {
        card._element.querySelector('.places__like-number').textContent = data.likes.length;
      })
      .catch((err) => {`Лайк не хочет уходить, ошибка: ${err}`})
    },
    () => {
      api.likeCard(el._id)
        .then((res) => {
          if(res.ok){
            return res.json()
          } else {
            return Promise.reject(res.status)
          }
      })
        .then((data) => {
          card._element.querySelector('.places__like-number').textContent = data.likes.length;
        })
        .catch((err) => {
          {
            console.log(`Не удалось лайкнуть: ${err}`)
          }
        })
    }
    
  )
  return card;
}

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
    api.updateUserInfo(formData)
      .then((res) => {
        if(res.ok){
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }
})
formEdit.setEventListeners();

/* add form submit */

const formAdd = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (formData) => {
    const cardElement = createCard(formData).generateCard();
    api.postCard(formData)
      .then((res) => {
        if(res.ok){
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
    placesList.prepend(cardElement);
  }
})
formAdd.setEventListeners();

addBtn.addEventListener('click', () => {
  formAdd.open();
  addFormValid.toggleButtonState();
});

/* avatar form submit */

const formAvatar = new PopupWithForm({
  popupSelector: popupAva,
  handleFormSubmit: (formData) => {
    avatar.style.backgroundImage = `url(${formData.avatar})`;
    api.updateAvatar(formData)
      .then((res) => {
        if(res.ok){
          return res.json()
        } else {
          return Promise.reject(res.status)
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }
})
formAvatar.setEventListeners();
avatar.addEventListener('click', () => {
  formAvatar.open();
  avaFormValid.toggleButtonState();
})