import {
  LOGIN_USER, LOGIN_ERROR, LOGIN_SUCCESS, REMOVE_MESSAGE,
} from '../../../constants';
import {
  loginUser, loginError, loginSuccess, removeMessage,
} from '../login';

describe('Login action creators', () => {
  it('Should dispatch LOGIN_USER type', () => {
    expect(loginUser({}).type).toEqual(LOGIN_USER);
  });
});

describe('Login error action creators', () => {
  it('should dispatch LOGIN_ERROR type', () => {
    expect(loginError({}).type).toEqual(LOGIN_ERROR);
  });
});

describe('Login success action creator', () => {
  it('should dispatch LOGIN_SUCCESS type', () => {
    expect(loginSuccess({}).type).toEqual(LOGIN_SUCCESS);
  });
});

describe('Remove login message action creator', () => {
  it('should dispatch REMOVE_MESSAGE type', () => {
    expect(removeMessage({}).type).toEqual(REMOVE_MESSAGE);
  });
});
