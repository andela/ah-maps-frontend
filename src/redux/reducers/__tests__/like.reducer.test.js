import likeButton, { initialState } from '../like';
import { LIKE_SUCCESS, DISLIKE_SUCCESS, GET_LIKES } from '../../../constants';

describe('Like reducers', () => {
  it('should provide initial state', () => {
    expect(likeButton(undefined, {})).toEqual(initialState);
  });

  it('should set liked state', () => {
    expect(
      likeButton(initialState, { type: LIKE_SUCCESS, }).liked
    ).toEqual(true);
  });

  it('should set disliked state', () => {
    expect(
      likeButton(initialState, { type: DISLIKE_SUCCESS, }).disliked
    ).toEqual(true);
  });

  it('should set get likes state', () => {
    expect(
      likeButton(initialState, { type: GET_LIKES, payload: {} }).likeCount
    ).toEqual(undefined);
  });
});
