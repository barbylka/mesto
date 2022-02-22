import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup{
  constructor(popupSelector, cardDelete) {
    super(popupSelector);
    this._handleEnter = this._handleEnter.bind(this);
    this._delete = cardDelete;
  }

  _handleEnter(evt, el) {
    if(evt.key === "Enter"){
        this._remove(evt, el)
    }
  }

  close(){
    super.close();
    this._popupSelector.removeEventListener('keydown', this._handleEnter);
  }

  setEventListeners(el) {
    super.setEventListeners();
    this._popupSelector.addEventListener('submit', (evt) => {
      this._delete();
      this._remove(evt, el);
      
    })
    document.addEventListener('keydown', evt => {
      this._delete();
      this._remove(evt, el)
    })

  }

  _remove(evt, el) {
    evt.preventDefault();
      el.remove();
      el = null;
      this.close();
  }
}