import { api } from '../../utils/api';

import {
  LIKE_SUCCESS, DISLIKE_SUCCESS, GET_LIKES
} from '../../constants';

export const likeSuccess = () => ({
  type: LIKE_SUCCESS,
});

export const dislikeSuccess = () => ({
  type: DISLIKE_SUCCESS,
});

export const getTheLikes = payload => ({
  type: GET_LIKES,
  payload,
});


export const liker = data => dispatch => api.user.likeArticle(data)
  .then(() => {
    dispatch(likeSuccess());
  });

export const disliker = data => dispatch => api.user.dislikeArticle(data)
  .then(() => {
    dispatch(dislikeSuccess());
  });

export const getLikes = data => dispatch => api.user.getArticle(data)
  .then((response) => {
    dispatch(getTheLikes(response.data));
  });

export default liker;
