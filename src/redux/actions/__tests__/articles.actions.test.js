import {
  ADD_ARTICLES,
  ADD_ARTICLES_ERROR,
  REMOVE_ARTICLE_MESSAGE,
} from '../../../constants';
import { addArticles, addArticlesError, removeArticleMessage } from '..';

describe('Article action creators', () => {
  it('Should dispatch ADD_ARTICLE type', () => {
    expect(addArticles({}).type).toEqual(ADD_ARTICLES);
  });

  it('Should dispatch ADD_ARTICLES_ERROR type', () => {
    expect(addArticlesError({}).type).toEqual(ADD_ARTICLES_ERROR);
  });

  it('Should dispatch ADD_ARTICLE type', () => {
    expect(removeArticleMessage({}).type).toEqual(REMOVE_ARTICLE_MESSAGE);
  });
});
