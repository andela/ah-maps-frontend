import {
  ADD_COMMENT, ADD_COMMENT_ERROR,
} from '../../constants';

export const addComment = payload => ({
  type: ADD_COMMENT,
  payload,
});

export const addCommentError = payload => ({
  type: ADD_COMMENT_ERROR,
  payload,
});
