/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleView from '../ArticleView';
import { USER_TOKEN } from '../../../constants';
import { setToken } from '../../../utils/auth';

const article = {
  author: { followers: [], username: USER_TOKEN.user.username },
  body: '[{}]',
  image: 'image.png',
};
describe('<ArticleView />', () => {
  it('renders ArticleView component without crashing', () => {
    shallow(
      <ArticleView
        redirect={() => {}}
        article={article}
        show
        loading
      />,
    );
  });
  it('renders ArticleView component without crashing with owner logged in', () => {
    setToken(USER_TOKEN);
    shallow(
      <ArticleView
        redirect={() => {}}
        article={article}
        show
        loading
      />,
    );

    shallow(
      <ArticleView
        redirect={() => {}}
        article={article}
        show={false}
        loading={false}
      />,
    );
  });
});
