import { SET_ARTICLES } from '../../../constants';
import { setArticles } from '../articleList';

describe('Article List reducer', () => {
  it('should dispatch SET_ARTICLES', () => {
    expect(setArticles({}).type).toEqual(SET_ARTICLES);
  });
});
