import {
  SIGNUP_ERROR, SIGNUP_SUCCESS,
} from '../../constants';

const initialState = {
  errors: [],
  success: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        success: true,
        errors: [],
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        success: false,
        errors: payload,
      };

    default:
      return state;
  }
};
