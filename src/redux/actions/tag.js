import { api } from '../../utils/api';

import {
  GET_TAGS,
} from '../../constants';

export const getTags = payload => ({
  type: GET_TAGS,
  payload,
});


export const fetchTags = data => dispatch => api.user.fetchTag(data);

export const postTags = data => dispatch => api.user.postTag(data);

export default fetchTags;
