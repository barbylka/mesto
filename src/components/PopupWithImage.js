import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    super.open();
    this._popupSelector.querySelector('.popup__pic-title').textContent = data.name;
    const popupImg = this._popupSelector.querySelector('.popup__img');
    popupImg.alt = `Панорама ${data.name}`;
    popupImg.src = data.link;
  }
}