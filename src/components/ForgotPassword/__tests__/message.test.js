import React from 'react';
import { shallow } from 'enzyme';
import Message from '../index';

it('renders Landingpage component without crashing', () => {
  shallow(<Message message="hello world" />);
});
