/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../index';
import { store } from '../../../redux/store';

const password = 'secret123';
const email = 'maps@maps.com';

it('renders Login component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>,
  );

  const node = wrapper.find('#email').at(1);
  node.simulate(
    'change',
    {
      target:
       { name: 'email', value: email },
    },
  );
  expect(node.instance().value).toBe(email);

  wrapper.find('#password').at(1).simulate(
    'change',
    {
      target:
    { name: 'password', value: password },
    },
  );

  wrapper.find('#login-form').simulate(
    'submit',
    { preventDefault() {} },
  );
});
