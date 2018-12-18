import { SET_COMMENTS } from '../../constants';

export const initialState = {
  success: false,
  comments: [],
};


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        success: true,
        comments: payload,
      };
    default:
      return state;
  }
};
