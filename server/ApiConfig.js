/**
 * @function ApiConfig
 */
module.exports = function ApiConfig() {
  return {
    urls: {
      domain: "https://www.dropbox.com",
      apiDomain: "https://api.dropboxapi.com",
      redirect_uri: "http://localhost:8080",
    },
    endpoints: {
      authCode: "/oauth2/authorize",
      authToken: "/oauth2/token",
      user: "/get_account"
    }
  };
}