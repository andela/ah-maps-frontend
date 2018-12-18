import {
  EDIT_PROFILE,
  PROFILE_FETCH,
  UPDATE_IMAGE,
} from '../../constants';

export const initialState = {
  profile: {},
  image: null,
  bio: null,
  modal: false,
  followers: [],
  following: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_IMAGE:
      return {
        ...state,
        image: payload,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        modal: true,
        bio: payload,
      };
    case PROFILE_FETCH:
      return {
        ...state,
        profile: payload,
        followers: payload.followers.length,
        following: payload.following.length,
      };
    default:
      return state;
  }
};
