import { TOKEN_KEY } from '../constants';

/**
 * Store jwt token in localStorage
 * @param {!string} token jwt token from server
 * @param {!string} key token object key
 */
export const setToken = (token, key = TOKEN_KEY) => {
  localStorage.setItem(key, token);
};

/**
 * Get token from localstorage
 * @param {!string} key token object key
 */
export const getToken = (key = TOKEN_KEY) => localStorage.getItem(key);
