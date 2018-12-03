import axios from 'axios';
import { getToken } from './auth';

class Api {
  constructor() {
    if (getToken()) { axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`; }
  }

  /**
 * Send a GET request to the server
 * @param {!string} path server url path
 */
  static get(path) {
    const url = process.env.REACT_APP_API_URL + path;
    return axios.get(url)
      .then(response => response).catch((error) => {
        throw error;
      });
  }

  /**
 * Send a PUT request to the server
 * @param {!string} path server url path
 */
  static put(path, data) {
    const url = process.env.REACT_APP_API_URL + path;
    return axios.put(url, data)
      .then(response => response).catch((error) => {
        throw error;
      });
  }

  /**
 * Send a POST request to the server
 * @param {!string} path server url path
 */
  static post(path, data) {
    const url = process.env.REACT_APP_API_URL + path;
    return axios.post(url, data)
      .then(response => response).catch((error) => {
        throw error;
      });
  }
}

export default Api;
