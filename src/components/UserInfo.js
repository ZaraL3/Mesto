export default class UserInfo {
  constructor({ profileTitle , profileSubtitle, profileAvatarSelector }) {
    this._profileNameElement = document.querySelector(profileTitle );
    this._profileDescriptionElement = document.querySelector(profileSubtitle);
    this._profileAvatarElement = document.querySelector(profileAvatarSelector);
    this._userAvatarLink = document.querySelector
  }

  getUserInfo() {
    return {
      userName: this._profileNameElement.textContent,
      userDescription: this._profileDescriptionElement.textContent,
      userAvatarLink: this._profileAvatarElement.src
    }
  }

  setUserInfo({ userName, userDescription }) {
    this._profileNameElement.textContent = userName;
    this._profileDescriptionElement.textContent = userDescription;
  }

  setUserAvatar({ userAvatarLink }) {
    this._profileAvatarElement.src = userAvatarLink;
  }

  saveUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
