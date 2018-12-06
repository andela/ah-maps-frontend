import login from '../login';

const user = {};

describe('Login reducers', () => {
  it('should provide the initial state', () => {
    expect(login(user, {})).toEqual({});
  });

  it('should add user details to the state', () => {
    expect(login(user, {})).toEqual(user);
  });
});
