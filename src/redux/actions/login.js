import {
  LOGIN_USER, LOGIN_ERROR, LOGIN_SUCCESS, REMOVE_MESSAGE,
} from '../../constants';
import { api } from '../../utils/api';

export const loginUser = payload => ({
  type: LOGIN_USER,
  payload,
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const removeMessage = () => ({
  type: REMOVE_MESSAGE,
});

export const LogInRequest = data => dispatch => api.user.login(data)
  .then((response) => {
    dispatch(loginSuccess(response.data.user));
    setTimeout(() => { dispatch(removeMessage()); }, 3000);
  })
  .catch((error) => {
    let issue = {};
    if (error.message === 'Network Error') {
      issue = { error: 'Network error' };
    } else {
      issue = error.response.data.errors;
    }
    dispatch(loginError(issue.error));
    setTimeout(() => { dispatch(removeMessage()); }, 5000);
  });

export default loginUser;
