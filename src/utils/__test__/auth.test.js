import { USER_TOKEN } from '../../constants';
import {
  getToken, setToken, removeToken, isLoggedIn,
} from '..';

it('should get null token', () => {
  expect(getToken()).toBeNull();
});

it('should get null token', () => {
  setToken(USER_TOKEN);
  expect(getToken()).toEqual(USER_TOKEN);
  setToken({ user: 'sdfsdf' });
  expect(isLoggedIn()).toBe(false);
});

it('should remove token from localstorage', () => {
  removeToken();
  expect(getToken()).toBeNull();
});
