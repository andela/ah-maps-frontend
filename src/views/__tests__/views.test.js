/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});
