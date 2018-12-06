import { TOKEN_KEY } from '../constants';

/**
 * Store jwt token in localStorage
 * @param {!string} token jwt token from server
 * @param {!string} key token object key
 */
export const setToken = (token, key = TOKEN_KEY) => {
  localStorage.setItem(key, JSON.stringify(token));
};

/**
 * Get token from localstorage
 * @param {!string} key token object key
 */
export const getToken = (key = TOKEN_KEY) => JSON.parse(localStorage.getItem(key));

/**
 * Remove a token from the localstorage
 * @param {!string} key token object key
 */
export const removeToken = (key = TOKEN_KEY) => {
  localStorage.removeItem(key);
};
