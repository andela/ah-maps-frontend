import { USER_TOKEN } from '../../constants';
import { getToken, setToken, removeToken } from '..';

it('should get null token', () => {
  expect(getToken()).toBeNull();
});

it('should get null token', () => {
  setToken(USER_TOKEN);
  expect(getToken()).toEqual(USER_TOKEN);
});

it('should remove token from localstorage', () => {
  removeToken();
  expect(getToken()).toBeNull();
});
