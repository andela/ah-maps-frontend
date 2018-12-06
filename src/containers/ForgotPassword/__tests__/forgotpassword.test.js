/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from '../index';
import { store } from '../../../redux/store';

const email = 'maps@maps.com';

it('renders ForgotPassword component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <ForgotPassword />
      </Router>
    </Provider>,
  );

  const node = wrapper.find('#email');
  node.simulate(
    'change',
    {
      target:
       { name: 'email', value: email },
    },
  );
  expect(node.instance().value).toBe(email);

  wrapper.find('#forgotpasswordform').simulate(
    'submit',
    { preventDefault() {} },
  );
});
