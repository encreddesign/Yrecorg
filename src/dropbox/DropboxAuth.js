import React from "react";
import axios from "axios";
import Params from "../helpers/Params";
import Session from "./Session";
import DropboxAuthFlow from "./DropboxAuthFlow";
import DropboxConfig from "./DropboxConfig";

/**
 * @class DropboxAuth
 */
export default class DropboxAuth {

  constructor() {
    this.tokenSession = "_grocery_dropbox_session";
    this.session = new Session(this.tokenSession);
  }

  /**
   * Returns authorizing url
   * @return {String}
   */
  getAuthURL() {
    if(!this.session.isSet()) {
      return DropboxAuthFlow.requestCode(DropboxConfig().security.clientId);
    }

    return null;
  }

  /**
   * Returns auth code from params
   * @return {String}
   */
  getAuthCode() {
    return Params.get("code");
  }

  /**
   * Authenticate user by code
   * @param {String} code 
   */
  authenticateUser(code) {
    const tokenUrl = DropboxAuthFlow.requestToken(code);

    const request = axios(
      {
        method: "post",
        url: tokenUrl,
        headers: {
          "Content-Type": "application/json"
        },
        responseType: "json"
      }
    );

    return request;
  }

  /**
   * Returns promise based on session set
   * @param {String} token 
   * @return {Promise}
   */
  setTokenSession(token) {
    this.session.setSession(token);

    return new Promise((resolve, reject) => {
      if(this.session.isSet()) {
        resolve();
      } else {
        reject();
      }
    });
  }
}