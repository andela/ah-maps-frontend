import { SET_ARTICLES } from '../../constants';
import { api } from '../../utils';

export const setArticles = payload => ({
  type: SET_ARTICLES,
  payload,
});

export const formatParams = (params) => {
  // extract url parameters from an object
  let url = '';
  if (typeof params === 'object') {
    if (Object.keys(params).length >= 1) {
      Object.keys(params).forEach((key) => {
        url += `${key}=${params[key]}&`;
      });
      // remove last &
      url = url.slice(0, -1);
    }
  }
  return url;
};
export const getArticles = params => (dispatch) => {
  const url = formatParams(params);
  return api.article.list(url);
};

export default setArticles;
