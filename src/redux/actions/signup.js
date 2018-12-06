import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';
import { api } from '../../utils/api';

export const signUpError = payload => ({
  type: SIGNUP_ERROR,
  payload,
});

export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const SignUpRequest = data => dispatch => api.user.signup(data)
  .then((response) => {
    const res = { message: response.data.user.success };
    dispatch(signUpSuccess(res));
  });

export default SignUpRequest;
