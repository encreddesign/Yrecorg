const axios = require("axios");
const ServerBase = require("./ServerBase");
const ApiConfig = require("./ApiConfig");
const ApiCredentials = require("./ApiCredentials");

/**
 * @class Auth
 */
module.exports = class Auth extends ServerBase {

  constructor() {
    super();
    this.setRoute("/authenticate/:code");
    this.requestURL = ApiConfig().urls.apiDomain + ApiConfig().endpoints.authToken;

    this.credentials = ApiCredentials();
  }

  /**
   * Sets exchange code for token request
   * @param {String} code 
   */
  setExchangeCode(code) {
    this.exchangeCode = code;
  }

  /**
   * Requests exchange token for user
   * @return {Promise}
   */
  requestToken() {
    return axios(
      {
        method: "post",
        url: this.requestURL,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        responseType: "json",
        data: this.setPostParams({
          code: this.exchangeCode,
          grant_type: "authorization_code",
          client_id: this.credentials.clientId,
          client_secret: this.credentials.clientSecret,
          redirect_uri: ApiConfig().urls.redirect_uri
        })
      }
    );
  }

  /**
   * Returns string url params
   * @param {Object} params 
   * @return {String}
   */
  setPostParams(params) {
    if(typeof params !== "object") {
      return null;
    }

    const postParams = [];

    Object.entries(params).forEach(([key, value]) => {
      postParams.push(`${key}=${value}`);
    });

    return postParams.join("&");
  }
}