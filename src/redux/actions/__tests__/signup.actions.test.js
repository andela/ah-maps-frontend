import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../../constants';
import { signUpError, signUpSuccess } from '..';


describe('Signup action creators', () => {
  it('Should dispatch type SIGNUP_ERROR', () => {
    expect(signUpError({}).type).toEqual(SIGNUP_ERROR);
  });
  it('Should dispatch type SIGNUP_SUCCESS', () => {
    expect(signUpSuccess({}).type).toEqual(SIGNUP_SUCCESS);
  });
});


describe('actions', () => {
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
