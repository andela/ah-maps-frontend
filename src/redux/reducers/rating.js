import {
  CHANGE_RATING, CHANGE_USER_RATING,
} from '../../constants';

export const initialState = {
  average_rating: 0,
  your_rating: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_RATING:
      return {
        ...state,
        average_rating: payload,
      };

    case CHANGE_USER_RATING:
      return {
        ...state,
        your_rating: payload,
      };

    default:
      return state;
  }
};
