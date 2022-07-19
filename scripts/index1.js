// Денамические карточки.
const initialCards = [

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

const popupForm = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector('.profile__edit');
const openedAddCards = document.querySelector('.popup_card-opened');
const openedEditProfile = document.querySelector('.popup_reduction');
const closeButton = document.querySelector('#button-close');
const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileAddButton = document.querySelector('.profile__add');
const openedPicture = document.querySelector('.popup_open-picture');
const closeProfile = document.querySelector('#close-button-profile');
const closePicture = document.querySelector('#close-button-picture');
const saveButtonProfile = document.querySelector('#save-profile');
const formProfile= document.querySelector('.popup-profile');
const buttonElement = document.querySelector('.popup__button-save-card');



// открытие попапа и закрытие 
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);

}


const closePopup = (popup) => {
 popup.classList.remove('popup_opened');
 document.removeEventListener('keydown', handleEscClose);
 
} 

const  handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
  closePopup(document.querySelector('.popup_opened'));
}
}

const handleOverlayClose = () => {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    const popupOverlay = popupElement.querySelector('.popup__overlay');
    popupOverlay.addEventListener('click', () => closePopup(popupElement));
  })
}

handleOverlayClose();

// открытие попапа редактирования и добавления карточки
const handleEditProfile = () => {

  nameInput.value = profileTitle.textContent; 
  jobInput.value = profileSubtitle.textContent;
  openPopup(openedEditProfile);
}

// функция редактирования профиля

function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileTitle.textContent = valueName; 
  profileSubtitle.textContent = valueJob;
  formProfile.reset();
  closePopup(openedEditProfile);
}

formProfile.addEventListener('submit', formSubmitHandlerEdit);


//   функцию, которая создает карточку и навешивает события 
const generateCard = (link, name) => {
  const cardTemplateConten = document.querySelector('#card-template').content;
  const newCardsAdd = cardTemplateConten.querySelector('.card').cloneNode(true);
  newCardsAdd.querySelector('.card__image').src = link;
  newCardsAdd.querySelector('.card__image').alt = name;
  newCardsAdd.querySelector('.card__name').textContent = name;
  

// событие лайк
  const likeButton = newCardsAdd.querySelector('.card__button-like').addEventListener('click', evt => {
      evt.target.classList.toggle('card__button-like_active');
  });
  
 

//  событие удаление 
  const buttonDelete = newCardsAdd.querySelector('.card__button-delete');
  buttonDelete.addEventListener('click', deleteCards);

  newCardsAdd.querySelector('.card__image').addEventListener('click', () => {
      handePicture(link, name)
    } )

  return newCardsAdd;
  }
  


const picturePopup = document.querySelector('.popup__picture');
const description = document.querySelector('.popup__description')

// функция открытия попапа при нажатии на картинку 
function handePicture (link, name) {
  picturePopup.src = link;
  picturePopup.alt = name;
  description.textContent = name;
  openPopup(openedPicture);
}

const listelement = document.querySelector('.elements__list');

initialCards.forEach(function(element) {
  listelement.prepend(generateCard(element.link, element.name));
});


// функуия - обработчик событий на удаление

function deleteCards(evt) {
  evt.target.closest('.card').remove();
}

const handleAddCards = () => {
  buttonElement.classList.add('popup__button-save_disabled');
  buttonElement.setAttribute('disabled', '');
  openPopup(openedAddCards);
}

// закрытие попапа по клику
profileEditButton.addEventListener('click', handleEditProfile);
profileAddButton.addEventListener('click', handleAddCards);
closeButton.addEventListener('click', () => closePopup(openedAddCards));
closeProfile.addEventListener('click', () => closePopup(openedEditProfile));
closePicture.addEventListener('click', () => closePopup(openedPicture));

const linkCardsInput = document.querySelector('.popup__input_el_card-link');
const nameCardsInput = document.querySelector('.popup__input_el_card-name');
const formAdd = document.querySelector('.popup__add');

 // функцию, которая отрисовываает созданные карточки
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newPictureItem = linkCardsInput.value;
  const newPictureTitle = nameCardsInput.value;
  const newCardsAdd = generateCard(newPictureItem, newPictureTitle);
  listelement.prepend(newCardsAdd);
  formAdd.reset();
  closePopup(openedAddCards);
}

formAdd.addEventListener('submit', handleAddFormSubmit);