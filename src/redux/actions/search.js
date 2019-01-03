import { ADD_SEARCHED_ARTICLES, ADD_SEARCHED_AUTHORS, ADD_SEARCHED_TAGS } from '../../constants';

export const addSearchedArticles = payload => ({
  type: ADD_SEARCHED_ARTICLES,
  payload,
});

export const addSearchedAuthors = payload => ({
  type: ADD_SEARCHED_AUTHORS,
  payload,
});

export const addSearchedTags = payload => ({
  type: ADD_SEARCHED_TAGS,
  payload,
});


export default addSearchedArticles;
