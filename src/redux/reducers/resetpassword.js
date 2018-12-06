import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
  REMOVE_MESSAGE,
  SHOW_MISMATCH,
  SHOW_ERROR,
} from '../../constants';

export const initialState = {
  message: '',
  visible: false,
  loading: false,
  matching: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_MESSAGE:
      return {
        ...state,
        message: payload,
        visible: true,
        success: true,
        loading: false,
        matching: true,
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        message: payload,
        visible: true,
        success: false,
        loading: false,
      };

    case START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        visible: false,
        message: '',
      };

    case SHOW_ERROR:
      return {
        ...state,
        message: 'Password should contain at least 8 characters, lowercase and uppercase letters and a number',
        visible: true,
        success: false,
      };

    case SHOW_MISMATCH:
      return {
        ...state,
        matching: false,
        message: 'Sorry, your passwords don\'t match, kindly try again',
        visible: true,
        success: false,
      };

    default:
      return state;
  }
};
