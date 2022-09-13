export default class Card {
  constructor({ data, userId, cardSelector, handleCardClick, handleLikeButtonClick, handleRemoveButtonClick }) {
    this._currentUserId = userId;
    this._isUserCard = userId === data.owner._id;
    this._imageLink = data.link;
    this._imageName = data.name;
    this._name = data.name;
    this._likes = data.likes;
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleRemoveButtonClick = handleRemoveButtonClick;
  }

  generateCard() {
    this._cardElement = this._cloneTemplate();
    this._cardsElementImage = this._cardElement.querySelector('.card__image');
    this._likeButton = this._cardElement.querySelector('.card__button-like');
    this._countLikeElement = this._cardElement.querySelector('.card__like_counter');
    this._cardsElementImage.src = this._imageLink;
    this._cardsElementImage.alt = this._imageName;
    this._cardElement.querySelector('.card__name').textContent = this._name;
    if (!this._isUserCard) {
      this._cardElement.querySelector('.card__button-delete').remove();
    }
    this._countLikeElement.textContent = this._likes.length;

    this._toggleLikeState();
    this._setEventListeners();

    return this._cardElement;
  }

  _cloneTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement
  }

  _setEventListeners() {
    if (this._isUserCard) {
      this._cardElement.querySelector('.card__button-delete').addEventListener('click', (evt) => {
        this._handleRemoveButtonClick(evt);
      });
    }
    this._likeButton.addEventListener('click', (evt) => this._handleLikeButtonClick(evt));
    this._cardsElementImage.addEventListener('click', () => this._handleCardClick());
  }



  _toggleLikeState() {
    if (this._checkUserLike()) {
      this.setLike();
    } else {
      this.unsetLike();
    }
  }

  setLike() {
    this._likeButton.classList.add('card__button-like_active');
    this.isLiked = true;
  }

  unsetLike() {
    this._likeButton.classList.remove('card__button-like_active');
    this.isLiked = false;
  }

  likesCounterUpdate(data) {
    this._countLikeElement.textContent = data.length;
  }

  _checkUserLike() {
    return this._likes.some((item) => item._id === this._currentUserId);
  }

  getCardId() {
    return this._cardId;
  }
  
  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
}
}
