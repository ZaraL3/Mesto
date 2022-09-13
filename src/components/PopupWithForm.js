import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
constructor(popupSelector, {handlerSubmitForm}) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._formElement = this._popup.querySelector('.popup__form');
    this._formElementSubmitButton = this._formElement.querySelector('.popup__button-save');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._initialText = this._formElementSubmitButton.textContent;
  }


  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  getFormElement() {
    return this._formElement;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListener() { 
    this._formElement.addEventListener('submit', (evt) => {
         evt.preventDefault();
         this._handlerSubmitForm(this._getInputValues());
    });
    super.setEventListener(); 
  } 

  isLoadingMessage(isLoading) {
    if (isLoading === true) {
      this._formElementSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formElementSubmitButton.textContent = this._initialText;
    }
  }
}
