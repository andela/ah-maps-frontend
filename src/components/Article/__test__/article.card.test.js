/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../ArticleCard';

describe('<ArticleCard />', () => {
  it('renders ArticleCard component without crashing', () => {
    shallow(
      <ArticleCard
        title=""
        author={{ followers: [] }}
        readingTime=""
        slug=""
        history={{}}
        refresh={() => {}}
      />,
    );
  });
});
