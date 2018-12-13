import { ADD_ARTICLES, ADD_ARTICLES_ERROR, REMOVE_ARTICLE_MESSAGE } from '../../constants';

export const addArticles = payload => ({
  type: ADD_ARTICLES,
  payload,
});

export const addArticlesError = payload => ({
  type: ADD_ARTICLES_ERROR,
  payload,
});

export const removeArticleMessage = payload => ({
  type: REMOVE_ARTICLE_MESSAGE,
  payload,
});
