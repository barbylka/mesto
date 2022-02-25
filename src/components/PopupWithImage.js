import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImg = this._popupElement.querySelector('.popup__img');
    this._captionImage = this._popupElement.querySelector('.popup__pic-title');
  }

  open(data) {
    super.open();
    this._captionImage.textContent = data.name;
    this._popupImg.alt = `Панорама ${data.name}`;
    this._popupImg.src = data.link;
  }
}