import { ADD_ARTICLES } from '../constants';

export const addArticles = payload => ({
  type: ADD_ARTICLES,
  payload,
});

export default addArticles;
