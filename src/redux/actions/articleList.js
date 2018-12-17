import { SET_ARTICLES } from '../../constants';
import { api } from '../../utils';

export const setArticles = payload => ({
  type: SET_ARTICLES,
  payload,
});

export const getArticles = () => dispatch => api.article.list();

export default setArticles;
