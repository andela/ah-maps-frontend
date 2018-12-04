import {
  SIGNUP_USER, SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';
import api from '../../utils/api';

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
      dispatch(signUpSuccess(response.data.user));
    })
    .catch((error) => {
      let issue = {};
      if (error.message === 'Network Error') {
        issue = { error: 'Network error' };
      } else {
        issue = error.response.data.errors;
      }
      dispatch(signUpError(issue));
    });
};

export default signUpUser;
