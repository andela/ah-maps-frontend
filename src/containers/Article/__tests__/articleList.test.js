/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList, mapStateToProps } from '../ArticleList';
import { initialState } from '../../../redux/reducers/articles';
import { ARTICLE } from '../../../constants';
import { api } from '../../../utils/api';

const state = { articlelist: initialState };
describe('<ArticleList />', () => {
  it('should map article list state to props', () => {
    const componentState = mapStateToProps(state);
    expect(componentState.articles.success).toEqual(initialState.success);
  });

  it('renders ArticleList component without crashing', () => {
    shallow(
      <ArticleList
        articles={{ results: [ARTICLE] }}
        history={{}}
        addArticles={() => {}}
        match={{ params: {} }}
        fetchArticles={api.article.single}
      />,
    );
  });
});
