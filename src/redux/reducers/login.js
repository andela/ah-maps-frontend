import { LOGIN_ERROR, LOGIN_SUCCESS, REMOVE_MESSAGE } from '../../constants';

export const initialState = {
  errors: [],
  success: false,
  message: '',
  visible: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        visible: true,
        errors: [],
        message: 'Successfully logged in',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        success: false,
        message: payload,
        visible: true,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        success: true,
        visible: false,
      };

    default:
      return state;
  }
};
