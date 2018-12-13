import { SET_ARTICLES } from '../../constants';

export const initialState = {
  links: {
    next: null,
    previous: null,
  },
  count: 7,
  counter: '',
  date: '',
  loading: true,
  total_pages: 1,
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};
