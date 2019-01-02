import { ADD_SEARCHED_ARTICLES, ADD_SEARCHED_AUTHORS, ADD_SEARCHED_TAGS } from '../../../constants';
import { addSearchedArticles, addSearchedAuthors, addSearchedTags } from '../search';

describe('Search action creators', () => {
  it('Should dispatch type ADD_SEARCHED_ARTICLES', () => {
    expect(addSearchedArticles({}).type).toEqual(ADD_SEARCHED_ARTICLES);
  });
  it('Should dispatch type ADD_SEARCHED_AUTHORS', () => {
    expect(addSearchedAuthors({}).type).toEqual(ADD_SEARCHED_AUTHORS);
  });
  it('Should dispatch type ADD_SEARCHED_TAGS', () => {
    expect(addSearchedTags({}).type).toEqual(ADD_SEARCHED_TAGS);
  });
});
