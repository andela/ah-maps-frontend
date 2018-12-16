/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Landingpage from '../Landingpage';
import SignUpPage from '../SignUp';
import LoginPage from '../Login';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
import ArticleList from '../ArticleList';
import Article from '../Article';
import ArticleView from '../Article/Articleview';

it('renders Landingpage component without crashing', () => {
  shallow(<Landingpage />);
});

it('renders ArticleView component without crashing', () => {
  shallow(<ArticleView />);
});

it('renders ArticleList component without crashing', () => {
  shallow(<ArticleList />);
});

it('renders Article component without crashing', () => {
  shallow(<Article />);
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
