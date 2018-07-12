/**
 * @class ServerBase
 */
module.exports = class ServerBase {

  constructor() {
    this.route = null;
  }

  /**
   * Sets route for server
   * @param {String} route 
   * @return {String}
   */
  setRoute(route) {
    this.route = route;
  }

  /**
   * Returns route for server
   * @return {String}
   */
  getRoute() {
    return this.route;
  }
}