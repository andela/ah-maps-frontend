import { api } from '../../utils/api';

import {
  SUCCESS_MESSAGE, ERROR_MESSAGE, START_LOADING, REMOVE_MESSAGE, SHOW_MISMATCH, SHOW_ERROR,
} from '../../constants';

export const showSuccessMessage = payload => ({
  type: SUCCESS_MESSAGE,
  payload,
});

export const showErrorMessage = payload => ({
  type: ERROR_MESSAGE,
  payload,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const removeTheMessage = () => ({
  type: REMOVE_MESSAGE,
});

export const showMismatchError = () => ({
  type: SHOW_MISMATCH,
});

export const showTheError = () => ({
  type: SHOW_ERROR,
});


export const messageChanger = data => (dispatch) => {
  dispatch(startLoading());
  return api.user.resetPassword(data)
    .then((response) => {
      dispatch(showSuccessMessage(response.data.user.message));
      setTimeout(() => { dispatch(removeTheMessage()); }, 5000);
    });
};

export const errorMessage = data => (dispatch) => {
  dispatch(showErrorMessage(data));
  setTimeout(() => { dispatch(removeTheMessage()); }, 5000);
};

export const showMismatch = () => (dispatch) => {
  dispatch(showMismatchError());
  setTimeout(() => { dispatch(removeTheMessage()); }, 5000);
};

export const submitNewPassword = (data, callBack) => (dispatch) => {
  dispatch(startLoading());
  return api.user.update(data)
    .then((response) => {
      dispatch(showSuccessMessage(response.data.user.message));
      callBack();
    });
};

export const showSuccess = data => (dispatch) => {
  dispatch(showSuccessMessage(data));
};

export const showError = () => (dispatch) => {
  dispatch(showTheError());
  setTimeout(() => { dispatch(removeTheMessage()); }, 5000);
};

export default showSuccessMessage;
