/**
 * Dropbox config for api
 */
export default function DropboxConfig() {
  return {
    urls: {
      domain: "https://www.dropbox.com",
      apiDomain: "http://localhost:3000",
      redirect_uri: "http://localhost:8080",
    },
    endpoints: {
      authCode: "/oauth2/authorize",
      authToken: "/authenticate",
      user: "/get_account"
    },
    security: {
      clientId: "l2adde4f7p0tr82"
    },
    tag: "Dropbox API",
    sessionKey: "_grocery_dropbox_session"
  };
}