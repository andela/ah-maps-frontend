import login, { initialState } from '../login';
import { LOGIN_ERROR, LOGIN_SUCCESS, REMOVE_MESSAGE } from '../../../constants';

describe('Login reducers', () => {
  it('should provide the initial state', () => {
    expect(login({}, {})).toEqual({});
  });

  it('should add user details to the state', () => {
    expect(login(initialState, {})).toEqual(initialState);
  });

  it('should dispatch LOGIN success message', () => {
    expect(login(initialState, { type: LOGIN_SUCCESS }).success).toEqual(true);
  });

  it('should dispatch LOGIN error message', () => {
    expect(login(initialState, { type: LOGIN_ERROR }).success).toEqual(false);
  });

  it('should dispatch remove message', () => {
    expect(login(initialState, { type: REMOVE_MESSAGE }).success).toEqual(true);
  });
});
