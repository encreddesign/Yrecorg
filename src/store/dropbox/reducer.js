import { types } from './actionTypes';

const initialState = {
  loginUrl: undefined
};

/**
 * Reducer Dropbox
 */
export default function reduce(state = initialState, action = {}) {
  switch(action.type) {
    case types.DROPBOX_LOGIN:
      return {
        ...state,
        loginUrl: action.loginUrl
      };
    default:
      return state;
  }
}