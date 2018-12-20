import { isLoggedIn, getToken } from './auth';

export const isOwner = (username) => {
  if (isLoggedIn()) {
    return username === getToken().username;
  }
  return false;
};

export default isOwner;
