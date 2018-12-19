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
    likeArticle: data => client.post(`article/like/${data.slug}/`),
    dislikeArticle: data => client.post(`article/dislike/${data.slug}/`),
    getArticle: data => client.get(`article/update/${data.slug}/`),
    rate: data => client.post(`rate/${data.slug}/`, { your_rating: data.rating }),
    fetchrate: data => client.get(`rate/${data.slug}/`, { your_rating: data.rating }),
    profile: username => client.get(`profile/${username}/`, { user: username }),
    editProfile: (username, data) => client.put(`/profile/update/${username}/`, data),
    postTag: () => client.post('tag/'),
    fetchTag: () => client.get('tag/'),
  },
  article: {
    list: () => client.get('article/'),
    single: slug => client.get(`article/detail/${slug}/`),
    update: (slug, data) => client.put(`article/update/${slug}/`, data),
    delete: slug => client.delete(`article/delete/${slug}/`),
    create: data => client.post('article/create', data),
  },
};
