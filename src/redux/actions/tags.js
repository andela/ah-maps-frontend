import { GET_TAGS } from '../../constants';

export const getTags = payload => ({
  type: GET_TAGS,
  payload,
});

export default getTags;