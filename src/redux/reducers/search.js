import { ADD_SEARCHED_ARTICLES, ADD_SEARCHED_AUTHORS, ADD_SEARCHED_TAGS } from '../../constants';

export const initialState = {
  tags: [],
  authors: [],
  articles: [],
};

export const distinctAuthors = (payload) => {
  const authors = [];
  payload.map((value) => {
    const found = authors.find(o => o.username === value.author.username);
    if (!found) authors.push(value.author);
  });
  return authors;
};

export const distinctTags = (payload) => {
  const tags = [];
  payload.map((value) => {
    value.tags.map((item) => {
      const found = tags.find(tag => tag === item);
      if (!found) tags.push(item);
    });
  });
  return tags;
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SEARCHED_ARTICLES:
      return { ...state, articles: payload };
    case ADD_SEARCHED_AUTHORS:
      return { ...state, authors: distinctAuthors(payload) };
    case ADD_SEARCHED_TAGS:
      return { ...state, tags: distinctTags(payload) };
    default:
      return state;
  }
};
