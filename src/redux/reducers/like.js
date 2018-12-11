import { LIKE_SUCCESS, DISLIKE_SUCCESS, GET_LIKES} from '../../constants';

export const initialState = {
  liked: false,
  likeCount: 0,
  disliked: false,
  dislikeCount: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIKE_SUCCESS:
      return {
        ...state,
        liked: !state.liked,
        likeCount: state.liked ? state.likeCount -= 1 : state.likeCount += 1,
        dislikeCount: state.disliked ? state.dislikeCount -= 1 : state.dislikeCount,
        disliked: false,
      };

    case DISLIKE_SUCCESS:
      return {
        ...state,
        disliked: !state.disliked,
        dislikeCount: state.disliked ? state.dislikeCount -= 1 : state.dislikeCount += 1,
        likeCount: state.liked ? state.likeCount -= 1 : state.likeCount,
        liked: false,
      };

    case GET_LIKES:
      return {
        ...state,
        liked: payload.liked,
        likeCount: payload.like_count,
        disliked: payload.disliked,
        dislikeCount: payload.dislike_count,
      };


    default:
      return state;
  }
};
