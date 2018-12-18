import { SET_COMMENTS } from '../../constants';
import { api } from '../../utils';

export const setComments = payload => ({
  type: SET_COMMENTS,
  payload,
});


export const getComments = slug => dispatch => api.comment.list(slug);
export const deleteComments = id => dispatch => api.comment.delete(id);
export const editComments = (id, data) => dispatch => api.comment.edit(id, data);
export const createThread = (slug, id, data) => dispatch => api.comment.createthread(slug, id, data);

export default setComments;
