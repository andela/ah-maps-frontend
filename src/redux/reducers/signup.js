import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';

export const initialState = {
  errors: [],
  success: false,
  status: 'error',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        errors: payload,
        status: 'success',
      };
    case SIGNUP_ERROR:
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
