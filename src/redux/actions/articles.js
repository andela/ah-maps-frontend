import { ADD_ARTICLES, ADD_ARTICLES_ERROR } from '../../constants';

export const addArticles = payload => ({
  type: ADD_ARTICLES,
  payload,
});

export const addArticlesError = payload => ({
  type: ADD_ARTICLES_ERROR,
  payload,
});
