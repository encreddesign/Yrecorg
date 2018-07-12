/**
 * @class Params
 */
export default class Params {

  /**
   * Returns param by key
   * @param {String} key
   */
  static get(key) {
    if(Params.getParams()) {
      return Params.getParams().get(key);
    }
    
    return null;
  }

  /**
   * Returns map of params
   * @return {Map}
   */
  static getParams() {
    const map = new Map();
    const url = window.location.href.split("?");

    if(url.length === 1) {
      return null;
    }

    const segments = url[1].split("&");

    for(let segmentsI = 0; segmentsI < segments.length; segmentsI++) {
      const keyValue = segments[segmentsI].split("=");

      if(keyValue.length > 0) {
        map.set(keyValue[0], keyValue[1]);
      }
    }

    return map;
  }

  /**
   * Resets history state
   */
  static resetState() {
    window.history.replaceState(null, "", "?");
  }
}