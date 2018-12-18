import {
  ADD_COMMENT_ERROR, ADD_COMMENT,
} from '../../constants';

export const initialState = {
  success: false,
  comment: {},
  status: 'error',
  errors: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        success: true,
        comment: payload,
        status: 'success',
        errors: { message: 'Comment submitted successfully' },
      };
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        success: false,
        errors: payload,
        status: 'error',
      };
    default:
      return state;
  }
};
