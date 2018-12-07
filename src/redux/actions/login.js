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

<<<<<<< HEAD
export const LogInRequest = data => dispatch => api.user.login(data);
=======
export const LogInRequest = data => api.user.login(data)
>>>>>>> feat(react router): implement authentication on routes

export default loginUser;
