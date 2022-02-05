export default class UserInfo {
  constructor(user, job) {
    this._user = user;
    this._job = job;
  }

  getUserInfo() {
    this._userProfile = {};
    this._userProfile.user = this._user.textContent;
    this._userProfile.job = this._job.textContent;
    return this._userProfile;
  }

  setUserInfo(formData) {
    this._user.textContent = formData.user;
    this._job.textContent = formData.job;
  }
}