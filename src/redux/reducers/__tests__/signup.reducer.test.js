import signup, { initialState } from '../signup';
import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../../constants';

describe('Signup reducers', () => {
  it('should provide the initial state', () => {
    expect(signup(undefined, {})).toEqual(initialState);
  });

  it('should add signup to the state', () => {
    expect(signup(initialState, {})).toEqual(initialState);
  });

  it('should set signup success', () => {
    expect(signup(initialState, { type: SIGNUP_SUCCESS }).success).toEqual(true);
  });

  it('should set signup error', () => {
    expect(signup(initialState, { type: SIGNUP_ERROR, payload: {} }).success).toEqual(false);
  });
});
