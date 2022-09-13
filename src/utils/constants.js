export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const classData = {
  inputSelector: 'popup__input',
  buttonSubmitClass: 'popup__button-save',
  disableButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  activeErrorClass: 'popup__input-error_visible',
};


export const profileAvatarEditButton = document.querySelector('.profile__overlay');
export const profileAvatarSelector = '.profile__avatar';
export const profileElement = document.querySelector('.profile');
export const profileTitle  = '.profile__title';
export const profileSubtitle = '.profile__subtitle';
export const profileEditButton = profileElement.querySelector('.profile__edit');
export const profileAddButton = profileElement.querySelector('.profile__add');

export const popupProfileSelector = '.popup_form_edit';
export const popupNewPlaceSelector = '.popup_form_add';
export const popupPhotosSelector = '.popup_viewer';
export const popupConfirmSelector = '.popup_form_confirm';
export const popupUpdateAvatarSelector = '.popup_form_avatar';

export const formElementEditAvatar = document.forms["placeData"];


export const placesList = '.elements__list';
export const cardSelector = '#card-template';


