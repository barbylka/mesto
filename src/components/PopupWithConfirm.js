import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup{
  constructor(popupElement) {
    super(popupElement);
  }

  open(cardDelete) {
    super.open();
    this._delete = cardDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._delete();
    })
  }
}