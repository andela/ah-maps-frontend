/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleTitle from '../ArticleTitle';

describe('<ArticleTitle />', () => {
  it('renders ArticleTitle component without crashing', () => {
    shallow(
      <ArticleTitle
        onChange={() => {}}
        title=""
        errors={{ title: 'Field required' }}
      />,
    );
  });
});
