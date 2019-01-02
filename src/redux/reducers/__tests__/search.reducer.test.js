import {
  ADD_SEARCHED_ARTICLES,
  ADD_SEARCHED_AUTHORS,
  ADD_SEARCHED_TAGS,
  ARTICLE,
} from '../../../constants';
import search, { initialState } from '../search';

const state = { ...initialState, authors: [ARTICLE] };
describe('Search Reducer', () => {
  it('should initialiaze state ', () => {
    expect(search(undefined, {})).toEqual(initialState);
  });
  it('should set searched artices', () => {
    expect(search(
      state,
      { type: ADD_SEARCHED_ARTICLES, payload: [ARTICLE] },
    ).articles).toEqual([ARTICLE]);
  });

  it('should set searched authors', () => {
    expect(search(
      state,
      { type: ADD_SEARCHED_AUTHORS, payload: [ARTICLE] },
    ).authors).toEqual([ARTICLE.author]);
  });
  it('should set searched tags', () => {
    const payload = search(state, { type: ADD_SEARCHED_TAGS, payload: [ARTICLE] });
    expect(payload.tags).toEqual(ARTICLE.tags);
  });
});
