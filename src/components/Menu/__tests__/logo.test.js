/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import App from '../Logo';

const options = new ReactRouterEnzymeContext();
it('renders Logo component without crashing', () => {
  shallow(<App />, options);
});
