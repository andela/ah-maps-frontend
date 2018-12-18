import comments, { initialState } from '../commentsList';
import { SET_COMMENTS } from '../../../constants';

describe('Comment reducers', () => {
  it('should provide the initial article list state', () => {
    expect(comments(undefined, {})).toEqual(initialState);
  });

  it('should add comments list to the state', () => {
    expect(comments(initialState, {})).toEqual(initialState);
  });

  it('should set comments success', () => {
    expect(
      comments(
        initialState,
        { type: SET_COMMENTS, payload: initialState },
      ).success,
    ).toEqual(true);
  });
});
