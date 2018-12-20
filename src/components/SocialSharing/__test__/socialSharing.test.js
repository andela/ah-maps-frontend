import React from 'react';
import { shallow } from 'enzyme';
import ShareButtons from '..';

describe('Social Sharing', () => {
  it('renders the socialShare buttons without crashing', () => {
    shallow(<ShareButtons title="title" />);
  });
});
