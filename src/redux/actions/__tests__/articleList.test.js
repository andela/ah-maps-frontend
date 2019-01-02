import { SET_ARTICLES } from '../../../constants';
import { setArticles, formatParams } from '../articleList';

describe('Article List reducer', () => {
  it('should dispatch SET_ARTICLES', () => {
    expect(setArticles({}).type).toEqual(SET_ARTICLES);
  });

  it('should extract parameters from an object', () => {
    const url = formatParams({ page_size: 10 });
    expect(url).toEqual('page_size=10');
  });
});
