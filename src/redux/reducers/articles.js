import { ADD_ARTICLES } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};
