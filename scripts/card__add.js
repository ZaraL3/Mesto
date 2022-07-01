const profileEditButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector ('.popup__button-close');
const formElement = document.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 

function openPopup (){
    popup.classList.add('popup__container_card');
    // nameInput.value = profileTitle.textContent;
    // jobInput.value = profileSubtitle.textContent; 
  }
  
  function closePopup (){
    popup.classList.remove('popup__container_card');
  }
  
  profileEditButton.addEventListener('click', openPopup);
  popupCloseButton.addEventListener('click', closePopup);