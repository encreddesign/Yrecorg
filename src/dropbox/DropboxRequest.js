import axios from "axios";
import DropboxConfig from "./DropboxConfig";

/**
 * @class DropboxRequest
 */
export default class DropboxRequest {

  constructor(requestToken) {
    this.axiosInstance = axios.create({
      baseURL: DropboxConfig().urls.apiDomain,
      headers: {
        "Authorization": `Bearer ${requestToken}`,
        "Content-Type": "application/json"
      }
    });
  }

  /**
   * Request to given server returns promise
   * @param {String} endpoint 
   * @param {String|Object} data  
   * @return {Promise}
   */
  request(endpoint, data = {}) {
    return new Promise((resolve, reject) => {

      this.axiosInstance.post(endpoint, data)
        .then((response) => {

          if(response.status < 400) {
            resolve(response.data);
          } else {
            reject(response.data);
          }
        }).catch((error) => {
          reject(error.message);
        });
    });
  }
}