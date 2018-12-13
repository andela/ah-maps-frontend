/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Article, mapStateToProps } from '../ArticleView';
import { initialState } from '../../../redux/reducers/articles';
import { ARTICLE } from '../../../constants';
import { api } from '../../../utils/api';

const options = new ReactRouterEnzymeContext();
const state = { articlelist: initialState };
describe('<ArticleView />', () => {
  it('should map article view state to props', () => {
    const componentState = mapStateToProps(state);
    expect(componentState.articles.success).toEqual(initialState.success);
  });

  it('renders ArticleView component without crashing', () => {
    shallow(
      <Article
        articles={ARTICLE}
        match={{ params: ARTICLE.slug }}
        addArticles={() => {}}
        singleArticle={api.article.single}
        history={{}}
      />, options,
    );
  });
});
