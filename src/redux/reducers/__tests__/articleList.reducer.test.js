import article, { initialState } from '../articlesList';
import { SET_ARTICLES } from '../../../constants';

describe('Article reducers', () => {
  it('should provide the initial article list state', () => {
    expect(article(undefined, {})).toEqual(initialState);
  });

  it('should add articles list to the state', () => {
    expect(article(initialState, {})).toEqual(initialState);
  });

  it('should set articles success', () => {
    expect(
      article(
        initialState,
        { type: SET_ARTICLES, payload: initialState },
      ).loading,
    ).toEqual(true);
  });
});
