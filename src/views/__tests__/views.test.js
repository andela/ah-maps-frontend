/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';
import SignUpPage from '../SignUp';
import LoginPage from '../Login';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});

it('renders Signup component without crashing', () => {
  shallow(<SignUpPage />);
});

it('renders LoginPage component without crashing', () => {
  shallow(<LoginPage />);
});
it('renders ForgotPassword component without crashing', () => {
  shallow(<ForgotPassword />);
});

it('renders ResetPassword component without crashing', () => {
  shallow(<ResetPassword />);
});

it('renders Logincomponent without crashing', () => {
  shallow(<Login />);
});
