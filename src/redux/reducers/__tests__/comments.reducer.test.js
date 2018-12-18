import comment, { initialState } from '../comments';
import {
  ADD_COMMENT_ERROR, ADD_COMMENT,
} from '../../../constants';


describe('Comment reducers', () => {
  it('should provide the initial article list state', () => {
    expect(comment(undefined, {})).toEqual(initialState);
  });

  it('should add articles list to the state', () => {
    expect(comment(initialState, {})).toEqual(initialState);
  });

  it('should set comments success', () => {
    expect(
      comment(
        initialState,
        { type: ADD_COMMENT, payload: initialState },
      ).success,
    ).toEqual(true);
  });

  it('should set comments success', () => {
    expect(
      comment(
        initialState,
        { type: ADD_COMMENT_ERROR, payload: initialState },
      ).success,
    ).toEqual(false);
  });
});
