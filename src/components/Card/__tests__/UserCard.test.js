/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import UserCard from '../UserCard';

describe('<UserCard />', () => {
  it('renders UserCard component without crashing', () => {
    shallow(
      <UserCard />,
    );
  });
});
