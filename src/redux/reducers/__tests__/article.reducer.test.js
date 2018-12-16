import article, { initialState } from '../articles';
import {
  ADD_ARTICLES, ADD_ARTICLES_ERROR,
} from '../../../constants';

const articleState = initialState;

describe('Article reducers', () => {
  it('should provide the initial article state', () => {
    expect(article(undefined, {})).toEqual(articleState);
  });

  it('should add article to the state', () => {
    expect(article(articleState, {})).toEqual(articleState);
  });

  it('should set article success', () => {
    expect(article(articleState, { type: ADD_ARTICLES }).success).toEqual(true);
  });

  it('should set article error', () => {
    expect(article(articleState, { type: ADD_ARTICLES_ERROR, payload: {} }).success).toEqual(false);
  });
});
