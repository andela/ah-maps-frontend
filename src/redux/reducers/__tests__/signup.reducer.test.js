import signup, { initialState } from '../signup';
import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../../constants';

const signUpState = initialState;

describe('Signup reducers', () => {
  it('should provide the signup initial state', () => {
    expect(signup(undefined, {})).toEqual(signUpState);
  });

  it('should add signup to the state', () => {
    expect(signup(signUpState, {})).toEqual(signUpState);
  });

  it('should set signup success', () => {
    expect(signup(signUpState, { type: SIGNUP_SUCCESS }).success).toEqual(true);
  });

  it('should set signup error', () => {
    expect(signup(signUpState, { type: SIGNUP_ERROR, payload: {} }).success).toEqual(false);
  });
});
