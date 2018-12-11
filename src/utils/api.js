import axios from 'axios';
import { isLoggedIn, getToken } from './auth';

export const authUserHeader = () => {
  const user = getToken();
  if (isLoggedIn()) {
    return {
      Authorization: `Bearer ${user.user.token}`,
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
    resetPassword: data => client.post('user/resetpassword', data),
    update: data => client.put(`user/update/${data.token}`, { password: data.password }),
    social: data => client.post('users/social_auth/', data),
  },

  article: {
    create: data => client.post('article/create', data),
  },

  tags: {
    list: () => client.get('/tag'),
    create: data => client.post('/tag', data),
  },
};
