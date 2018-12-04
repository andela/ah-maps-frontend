import {
  SIGNUP_USER, SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../../constants';
import { signUpError, signUpSuccess, signUpUser } from '..';


describe('Signup action creators', () => {
  it('Should dispatch type SIGNUP_USER', () => {
    expect(signUpUser({}).type).toEqual(SIGNUP_USER);
  });
  it('Should dispatch type SIGNUP_ERROR', () => {
    expect(signUpError({}).type).toEqual(SIGNUP_ERROR);
  });
  it('Should dispatch type SIGNUP_SUCCESS', () => {
    expect(signUpSuccess({}).type).toEqual(SIGNUP_SUCCESS);
  });
});


describe('actions', () => {
  it('should create signupuser action', () => {
    const payload = 'create signup success';
    const expectedAction = {
      type: SIGNUP_USER,
      payload,
    };
    expect(signUpUser(payload)).toEqual(expectedAction);
  });
  it('should create signupsuccess action', () => {
    const payload = 'create signup success';
    const expectedAction = {
      type: SIGNUP_SUCCESS,
      payload,
    };
    expect(signUpSuccess(payload)).toEqual(expectedAction);
  });
  it('should create signuperror action', () => {
    const payload = 'create signup success';
    const expectedAction = {
      type: SIGNUP_ERROR,
      payload,
    };
    expect(signUpError(payload)).toEqual(expectedAction);
  });
});
