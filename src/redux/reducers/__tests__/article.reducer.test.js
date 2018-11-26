import article from '../articles';

const articles = { name: 'article', id: 1 };
describe('Article reducers', () => {
  it('should provide the initial state', () => {
    expect(article(undefined, {})).toEqual({});
  });

  it('should add articles to the state', () => {
    expect(article(articles, {})).toEqual(articles);
  });
});
