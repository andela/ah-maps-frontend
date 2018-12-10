import { api } from '../../utils/api';

import {
  CHANGE_RATING, CHANGE_USER_RATING,
} from '../../constants';

export const changeRating = payload => ({
  type: CHANGE_RATING,
  payload,
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

export const fetchRating = data => dispatch => api.user.fetchrate(data)
  .then((response) => {
    dispatch(changeRating(response.data.average_rating));

    if (typeof response.data.your_rating === 'number') {
      dispatch(changeUserRating(response.data.your_rating));
    } else {
      dispatch(changeUserRating(0));
    }
  });

export default addRating;
