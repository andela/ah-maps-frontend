/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { ArticleForm, mapStateToProps } from '..';
import { initialState } from '../../../redux/reducers/articles';
import { ARTICLE } from '../../../constants';
import { api } from '../../../utils/api';

const options = new ReactRouterEnzymeContext();
const state = { articles: initialState };
describe('<ArticleFormContainer />', () => {
  it('should map article form state to props', () => {
    const componentState = mapStateToProps(state);
    expect(componentState.articles.success).toEqual(false);
  });

  it('renders ArticleView component without crashing', () => {
    shallow(
      <ArticleForm
        articles={ARTICLE}
        match={{ params: ARTICLE.slug }}
        addArticles={() => {}}
        singleArticle={api.article.single}
        removeMessage={api.article.single}
        history={{}}
      />, options,
    );
  });
});
