/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import SignUp from '../index';
import { store } from '../../../redux/store';

it('renders SignUp component without crashing', () => {
  shallow(
    <Provider store={store}>
      <Router>
        <SignUp />
      </Router>
    </Provider>,
  );
});
