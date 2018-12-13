/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '..';

describe('<Card />', () => {
  it('renders Card component without crashing', () => {
    shallow(
      <Card>
        <span>Children</span>
      </Card>,
    );
  });
});
