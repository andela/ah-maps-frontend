import resetpassword, { initialState } from '../resetpassword';
import {
  SUCCESS_MESSAGE, 
  ERROR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
  REMOVE_MESSAGE,
  SHOW_MISMATCH,
  SHOW_ERROR,
} from '../../../constants';

describe('ResetPassword reducers', () => {
  it('should provide the initial state', () => {
    expect(resetpassword(undefined, {})).toEqual(initialState);
  });

  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: SUCCESS_MESSAGE, payload: '' }).success,
    ).toEqual(true);
  });
  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: ERROR_MESSAGE, payload: '' }).success,
    ).toEqual(false);
  });
  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: START_LOADING }).loading,
    ).toEqual(true);
  });
  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: STOP_LOADING }).loading,
    ).toEqual(false);
  });
  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: REMOVE_MESSAGE }).visible,
    ).toEqual(false);
  });

  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: SHOW_MISMATCH }).success,
    ).toEqual(false);
  });

  it('should add data to the state', () => {
    expect(
      resetpassword(initialState, { type: SHOW_ERROR }).success,
    ).toEqual(false);
  });

});
