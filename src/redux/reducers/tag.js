import {
  GET_TAGS,
} from '../../constants';

export const initialState = {
  tags: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TAGS:
      return { tags: payload };

    default:
      return state;
  }
};
