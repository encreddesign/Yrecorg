const fs = require("fs");

/**
 * @function getCredentials
 */
module.exports = function getCredentials() {
  const creds = {};
  const file = fs.readFileSync("api_credentials.creds", "utf8");

  if(file === null) {
    return null;
  }

  const readLines = file.split("\n");

  for(let readLinesI = 0; readLinesI < readLines.length; readLinesI++) {
    const keyValue = readLines[readLinesI].split("=");
    
    if(keyValue.length === 0) {
      break;
    }

    const key = keyValue[0];
    const value = keyValue[1];

    creds[key] = value;
  }

  return creds;
}