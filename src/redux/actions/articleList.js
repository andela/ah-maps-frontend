import { SET_ARTICLES } from '../../constants';

export const setArticles = payload => ({
  type: SET_ARTICLES,
  payload,
});

export default setArticles;
