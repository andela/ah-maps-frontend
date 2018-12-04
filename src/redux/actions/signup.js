import { createBrowserHistory } from 'history';
import {
  SIGNUP_USER, SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';
import api from '../../utils/api';


const history = createBrowserHistory();

export const signUpUser = payload => ({
  type: SIGNUP_USER,
  payload,
});

export const signUpError = payload => ({
  type: SIGNUP_ERROR,
  payload,
});

export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const SignUpRequest = data => (dispatch) => {
  api({ url: 'users/', method: 'post', data })
    .then((response) => {
      const res = { message: response.data.user.success };
      dispatch(signUpSuccess(res));
      history.replace('/login');
      setTimeout(() => { window.location.reload(); }, 3000);
    })
    .catch((error) => {
      let issue = {};
      if (error.message === 'Network Error') {
        issue = { error: 'Network error' };
      } else {
        issue = error.response.data.errors;
      }
      issue = issue === 'undefined' ? {} : issue;
      dispatch(signUpError(issue));
    });
};

export default signUpUser;
