import axios from 'axios';
import { getToken } from './auth';

export const authUserHeader = () => {
  const user = getToken();
  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
    };
  }
  return {};
};

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export const api = {
  user: {
    signup: data => client.post('users/', data),
    login: data => client.post('users/login/', data),
  },
};
