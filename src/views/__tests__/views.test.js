/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';
import SignUpPage from '../SignUp';
import LoginPage from '../Login';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});

it('renders Signup component without crashing', () => {
  shallow(<SignUpPage />);
});

it('renders LoginPage component without crashing', () => {
  shallow(<LoginPage />);
});
