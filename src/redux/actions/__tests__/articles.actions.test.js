import { ADD_ARTICLES } from '../../constants';
import { addArticles } from '..';

describe('Article action creators', () => {
  it('Should dispatch ADD_ARTICLE type', () => {
    expect(addArticles({}).type).toEqual(ADD_ARTICLES);
  });
});
