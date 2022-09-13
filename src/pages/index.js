import './index.css';
import {
  classData,
  profileAvatarEditButton,
  profileAvatarSelector,
  profileTitle ,
  profileSubtitle,
  profileEditButton,
  profileAddButton,
  popupProfileSelector,
  popupNewPlaceSelector,
  popupPhotosSelector,
  popupConfirmSelector,
  popupUpdateAvatarSelector,
  placesList,
  cardSelector,
 
} from '../utils/constants.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: '9f52496e-06ab-49fe-a558-2ab3a52b2dca',
    'Content-Type': 'application/json',
  },
});


const userInfo = new UserInfo({ profileTitle , profileSubtitle, profileAvatarSelector });


Promise.all([api.getInitialCards(), api.getUserInfo()]).then(([cardData, userData]) => {
  userInfo.setUserInfo({ userName: userData.name, userDescription: userData.about });
  userInfo.setUserAvatar({ userAvatarLink: userData.avatar });
  userInfo.saveUserId(userData._id);
  cards.renderItems(cardData);
}).catch((err) => {
  console.error(err);
});


const cards = new Section({
  renderer: (item) => {
    const cardElement = createNewCard(item, cardSelector);
    cards.addItem(cardElement);
  },
}, placesList);


const popupUpdateAvatar = new PopupWithForm(popupUpdateAvatarSelector, {
  handlerSubmitForm: (item) =>{
    popupUpdateAvatar.isLoadingMessage(true);
    api.updateProfileAvatar({ avatar: item.url }).then((data) => {
      userInfo.setUserAvatar({ userAvatarLink: data.avatar });
      popupUpdateAvatar.close();
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      popupUpdateAvatar.isLoadingMessage(false);
    });
  }
});


popupUpdateAvatar.setEventListener();
const popupUpdateAvatarValidator = new FormValidator(classData, popupUpdateAvatar.getFormElement());
popupUpdateAvatarValidator.enableValidation();

profileAvatarEditButton.addEventListener('click', () => {
  popupUpdateAvatarValidator.resetValidation();
  popupUpdateAvatar.open();
});


const popupProfile = new PopupWithForm(popupProfileSelector,{
  handlerSubmitForm: (item ) => {
  popupProfile.isLoadingMessage(true);
  api.updateUserInfo({ name: item.title, about: item.subtitle }).then((data) => {
    userInfo.setUserInfo({ userName: data.name, userDescription: data.about });
    popupProfile.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupProfile.isLoadingMessage(false);
  });}
});
popupProfile.setEventListener();
const popupProfileValidator = new FormValidator(classData, popupProfile.getFormElement());
popupProfileValidator.enableValidation();


const popupNewPlace = new PopupWithForm(popupNewPlaceSelector, {
  handlerSubmitForm: (item) => {
  popupNewPlace.isLoadingMessage(true);
  api.addNewCard({ name: item.name, link: item.url }).then((newCardItem) => {
    const cardElement = createNewCard(newCardItem, cardSelector);
    cards.addNewItem(cardElement);
    popupNewPlace.close();
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    popupNewPlace.isLoadingMessage(false);
  });}
});
popupNewPlace.setEventListener();
const popupNewPlaceValidator = new FormValidator(classData, popupNewPlace.getFormElement());
popupNewPlaceValidator.enableValidation();


const popupConfirm = new PopupWithConfirmation(popupConfirmSelector);
popupConfirm.setEventListener();


const popupViewer = new PopupWithImage(popupPhotosSelector);
popupViewer.setEventListener();


profileEditButton.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  const profileForm = popupProfile.getFormElement();
  profileForm.elements.name.value = userInfoData.userName;
  profileForm.elements.description.value = userInfoData.userDescription;
  popupProfileValidator.resetValidation();
  popupProfile.open();
});


profileAddButton.addEventListener('click', () => {
  popupNewPlaceValidator.resetValidation();
  popupNewPlace.open();
});


function createNewCard(item, cardSelector) {
  const card = new Card({
    data: item, cardSelector, userId: userInfo.getUserId(),
    handleCardClick: () => {
      popupViewer.open(item.link, item.name);
    },
    handleLikeButtonClick: () => {
      if (card.isLiked) {
        api.deleteCardLike(card.getCardId()).then((data) => {
          card.unsetLike();
          card.likesCounterUpdate(data.likes);
        }).catch((err) => {
          console.error(err);
        });
      } else {
        api.addCardLike(card.getCardId()).then((data) => {
          card.setLike();
          card.likesCounterUpdate(data.likes);
        }).catch((err) => {
          console.error(err);
        });
      }
    },
    handleRemoveButtonClick: () => {
      const cardId = card.getCardId();
      popupConfirm.changeHandlerSubmitForm((evt) => {
        evt.preventDefault();
        api.removeCard(cardId).then(() => {
          card.deleteCard();
          popupConfirm.close();
        }).catch((err) => {
          console.error(err);
        });
      });
      popupConfirm.open();
    },
  });
  return card.generateCard();
}
