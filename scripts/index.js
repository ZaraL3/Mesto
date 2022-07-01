const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 


/*открытие и закрытие формы по нажатию на значок*/
const profileEditButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector ('.popup__button-close');
const profileAdd = document.querySelector('.profile__add');
const openedReduction = document.querySelector('popup_reduction');
const openedCards = document.querySelector('.popup__container_card');
const openedImage = document.querySelector('.popup_open-picture');

const openPopup = () => {
  popup.classList.add('popup_opened'); 
}
 
const handleEditProfile = () => {
  openPopup(openedReduction);
}

const handlAddCards = () => {
  openPopup(openedCards);
   
}

const handlAddImage = () =>{
  openPopup(openedImage);
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

const handleDeleteCards = () => {
  closePopup(openedCards);
}
const handleDeleteProfile = () => {
  closePopup(openedReduction);
}
profileEditButton.addEventListener('click', handleEditProfile);
popupCloseButton.addEventListener('click', handleDeleteProfile);

profileAdd.addEventListener('click', handlAddCards);
popupCloseButton.addEventListener('click', handleDeleteCards)


// popupCloseButton.addEventListener('click', closePopup);

/*функция для редактирование полей и сохранение внесенных данных*/

function formSubmitHandler(evt) {
  evt.preventDefault();
  
  const valueName = nameInput.value;
  const valueJob = jobInput.value;

  profileTitle.textContent = valueName; 
  profileSubtitle.textContent = valueJob;
  
  closePopup ();

}

formElement.addEventListener('submit', formSubmitHandler);

const popUpPictures = document.querySelectorAll('.popup__container_picture');

function openImagePopup(name, link){
  console.log( "name, link =>".charAt, name, link)

  handlAddImage();
  popUpPictures.querySelector('.popup__description').textContent = name;
  popUpPictures.querySelector('.popup__picture').src = link;
  console.log(popUpPictures);
}

function addNewCards(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.elements__text').textContent = name;

  let cardImg = cardElement.querySelector('.elements__image');
  cardImg.src = link;
  cardImg.addEventListener('click', function(){
    openImagePopup(name, link)
  })
}

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



const renderItem =(name, link) => {

  function cardsAdd (name, link) {
    const itemTemplate = document.querySelector('#card-template').content;
  }

const htmlElement = itemTemplate.cloneNode(true);
htmlElement.querySelector('.card__name').textContent = text;


list.append(htmlElement)
}
// функция, которая создает карточку и навешивает события
// const list = document.querySelector('.elements__list');

// function renderItem (name, link){
//   popup.querySelector('.')
//   for (let index = 0; index < initialCards.length; index++) {
//     const element = initialCards[index];
//     list.insertAdjacentElement('beforeend', `<li class="elements__list-item">
//     <img src="image/seealpsee.jpg" alt="Озеро Зееальп" class="elements__image">
//     <button class="elements__delete" type="button"></button>
//     <div class="elements__container">
//         <h2 class="elements__text">Озеро Зееальп</h2>
//         <button type="button" class="elements__like"></button>
//     </div>
// </li>`);
//  debugger;
    
    
//   }

// }

// Удаление карточки (почему только одна карточка удаляется?)

// const deleteButton = document.querySelectorAll('.elements__delete');
// // добавим обработчик
// deleteButton.addEventListener('click', function () {
//   const listItem = deleteButton.closest('.elements__list-item');
//   listItem.remove();
// }); 

// const elementsContainer = document.querySelectorAll('elements__container')
// const songElement= document.querySelector('.elements__like');
// songElement.addEventListener('click', function (evt) {
//   evt.target.classList.toggle('elements__like_active');
//   });
  
//  elementsContainer.append(songElement);


/*закрытие формы не по нажатию на значок, а в любую облость вокруг формы*/

/*popup.addEventListener('click', () => {
  closePopup()

})

document.querySelector('.popup__container').addEventListener( 'click', (event) => {
  event.stopPropagation()
})*/


// открытие картинки

// popupImage = document.querySelector('.popup__picture');
// popupName = document.querySelector('.popup__description');

// function openPopup(imageLink, imageName) {
//   let popupImage.src = imageLink;
//   popupImage.alt = imageName;
//   popupName.textContent = imageName;

//   openPopup();
// }

// const initialCards = [
//   {
//     name: 'Озеро Зееальп',
//     link: 'https://unsplash.com/photos/BMxyU_Hkvs4'
//   },
//   {
//     name: 'Калифорния',
//     link: 'https://unsplash.com/photos/s1T9RGy9lE8'
//   },
//   {
//     name: 'Пинцоло',
//     link: 'https://unsplash.com/photos/X5REiD-cIlw'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 

// const renderItems = () => {
//   for (let index = 0; index < initialCards.length; index++) {
//     const image = initialCards[index];
//     debugger;
//   }
// }

// const counter = document.querySelector('.card__like_counter')
//         this._element.querySelector('.card__button-like')
//             counter.addEventListener('click',  evt => {
//                 onLikeClick(this._id, this._likedByUser).then(x => {
//                     this._likes = x.likes.length;
//                     this._likedByUser = !this._likedByUser;
//                     counter.textContent = this._likes;
//                     evt.target.classList.toggle('card__button-like_active');
//                 });

// const listTemplate = document.querySelector('.elements__list').content;
// const list = document.querySelectorAll('.elements__list-item');
// const formButton = document.querySelector('.popup__button-save');
// const formInput = document.querySelector('.popup__input_el_card-link');

// let editing = null;

// const renderItems = () => {
//   renderItems.forEach(renderItem);
// }

// const renderItem = (text) => {
// 	const htmlElement = listTemplate.cloneNode(true);
// 	htmlElement.querySelector('.elements__text').textContent = text;
// 	setEventListeners(htmlElement);

// 	list.append(htmlElement)
// }
 
// const handleSubmit = () => {
//   renderItem(formInput.value);
// }


// // Удаление карточки как в вибинаре

// function handleDelete (evt){
//   evt.target.closest('.elements__list-item').remove;
//   resetEditMode();
// }

// function resetEditMode() {
// 	editing = null;
// 	formInput.value = '';

// 	formButton.value = 'Создать';

// 	formButton.removeEventListener('click', handleEditSubmit);
// 	formButton.addEventListener('click', handleSubmit)
// }

// function setEventListeners (){
//   const deleteButton = document.querySelector('.elements__delete');
//   deleteButton.addEventListener('click', handleDelete);

// }