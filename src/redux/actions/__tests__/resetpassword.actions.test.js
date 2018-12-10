import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  START_LOADING,
  REMOVE_MESSAGE,
  SHOW_MISMATCH,
  SHOW_ERROR,
} from '../../../constants';
import {
  showSuccessMessage, showErrorMessage,
  removeMessage, showMismatchError,
  showTheError, startLoading,
} from '..';


describe('Error message action creators', () => {
  it('Should dispatch ERROR_MESSAGE type', () => {
    expect(showErrorMessage({}).type).toEqual(ERROR_MESSAGE);
  });
  it('Should dispatch SUCCESS_MESSAGE type', () => {
    expect(showSuccessMessage({}).type).toEqual(SUCCESS_MESSAGE);
  });
  it('Should dispatch START_LOADING type', () => {
    expect(startLoading({}).type).toEqual(START_LOADING);
  });
  it('Should dispatch REMOVE_MESSAGE type', () => {
    expect(removeMessage({}).type).toEqual(REMOVE_MESSAGE);
  });
  it('Should dispatch SHOW_MISMATCH type', () => {
    expect(showMismatchError({}).type).toEqual(SHOW_MISMATCH);
  });
  it('Should dispatch SHOW_ERROR type', () => {
    expect(showTheError({}).type).toEqual(SHOW_ERROR);
  });
});

describe('actions', () => {
  it('should create showSuccessMessage action', () => {
    const payload = 'create showSuccessMessage';
    const expectedAction = {
      type: SUCCESS_MESSAGE,
      payload,
    };
    expect(showSuccessMessage(payload)).toEqual(expectedAction);
  });

  it('should create showErrorMessage action', () => {
    const payload = 'create showErrorMessage';
    const expectedAction = {
      type: ERROR_MESSAGE,
      payload,
    };
    expect(showErrorMessage(payload)).toEqual(expectedAction);
  });
});
