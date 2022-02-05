import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    super.open();
    this._popupSelector.classList.add('popup_opened');
    document.querySelector('.root').classList.add('root_hidden');
    this._popupSelector.querySelector('.popup__pic-title').textContent = data.name;
    this._popupSelector.querySelector('.popup__img').alt = data.alt;
    this._popupSelector.querySelector('.popup__img').src = data.link;
  }
}