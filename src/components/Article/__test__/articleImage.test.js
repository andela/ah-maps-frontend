/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleImage from '../ArticleImage';

describe('<ArticleImage />', () => {
  it('renders ArticleImage component without crashing', () => {
    shallow(
      <ArticleImage
        onImageChange={() => {}}
      />,
    );
  });
});
