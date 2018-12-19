import { api } from '../../utils/api';

import {
  CHANGE_RATING, CHANGE_USER_RATING, START_LOADING,
} from '../../constants';

export const changeRating = payload => ({
  type: CHANGE_RATING,
  payload,
});

export const startLoader = () => ({
  type: START_LOADING,
});

export const changeUserRating = payload => ({
  type: CHANGE_USER_RATING,
  payload,
});


export const addRating = data => dispatch => api.user.rate(data)
  .then((response) => {
    dispatch(changeRating(response.data.average_rating));
    dispatch(changeUserRating(response.data.your_rating));
  });

export const fetchRating = data => (dispatch) => {
  dispatch(startLoader());
  return api.user.fetchrate(data)
    .then((response) => {
      dispatch(changeRating(response.data.average_rating));
      // the 'if' statement below dispatches a 0 incase the logged in user's rating is null or undefined
      if (typeof response.data.your_rating === 'number') {
        dispatch(changeUserRating(response.data.your_rating));
      } else {
        dispatch(changeUserRating(0));
      }
    });
};


export default addRating;
