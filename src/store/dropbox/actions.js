import DropboxAuth from '../../dropbox/DropboxAuth';
import { types } from './actionTypes';

/**
 * Action Dropbox Login
 */
export const dropboxLogin = () => {
  const dropboxAuth = new DropboxAuth();

  return (dispatch) => {
    if(dropboxAuth.getAuthURL()) {
      const loginUrl = dropboxAuth.getAuthURL();

      dispatch({
        type: types.DROPBOX_LOGIN,
        loginUrl
      });
    }
  };
}