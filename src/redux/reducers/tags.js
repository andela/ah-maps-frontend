import { GET_TAGS } from '../../constants';

export const initialState = {
  tags: [],
  success: false,
  errors: [],
  status: 'error',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TAGS:
      return {
        tags: payload,
        success: true,
        status: 'success',
      };
    default:
      return state;
  }
};
