import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';

export const signUpError = payload => ({
  type: SIGNUP_ERROR,
  payload,
});

export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});


export default signUpSuccess;
