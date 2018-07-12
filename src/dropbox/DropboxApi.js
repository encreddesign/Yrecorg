import Session from "./Session";
import DropboxRequest from "./DropboxRequest";
import DropboxConfig from "./DropboxConfig";

/**
 * @class DropboxApi
 */
export default class DropboxApi {

  constructor() {
    this.session = new Session(DropboxConfig().sessionKey);
    this.access_token = this.session.getSession();

    this.dropboxRequest = new DropboxRequest(this.access_token);
  }

  /**
   * Gets user account
   * @param {String} userId 
   * @return {Promise}
   */
  getUserAccount(userId) {
    let data = {};

    if(userId) {
      data = {
        "account_id": userId
      };
    }

    return this.dropboxRequest.request(DropboxConfig().endpoints.user, data);
  }
}