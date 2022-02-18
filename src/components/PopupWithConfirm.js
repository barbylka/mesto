import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._handleEnter = this._handleEnter.bind(this)
  }

  _handleEnter(evt, el) {
    if(evt.key === "Enter"){
        this._remove(evt, el)
    }
  }

  open(){
    super.open();
  }

  close(){
    super.close();
    this._popupSelector.removeEventListener('keydown', this._handleEnter);
  }

  setEventListeners(el) {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      this._remove(evt, el)
    })
    document.addEventListener('keydown', evt => this._remove(evt, el));
  }

  _remove(evt, el) {
    evt.preventDefault();
      el.remove();
      el = null;
      this.close();
  }
}