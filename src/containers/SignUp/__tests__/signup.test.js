/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import SignUp from '../index';
import { store } from '../../../redux/store';

let node;
let password = 'Qwerty12345';
const email = 'maps@maps.com';
const username = 'maps';

it('renders SignUp component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <SignUp />
      </Router>
    </Provider>,
  );
  // fill in strong password field with Qwerty12345
  wrapper.find('#password').at(1).simulate(
    'change',
    {
      target:
       { name: 'password', value: password },
    },
  );
  wrapper.find('#confirmPassword').at(1).simulate(
    'change',
    {
      target:
       { name: 'confirmPassword', value: password },
    },
  );

  // add valide email input value
  node = wrapper.find('#email').at(1);
  node.simulate(
    'change',
    {
      target:
       { name: 'email', value: email },
    },
  );
  expect(node.instance().value).toBe(email);
  node = wrapper.find('#username').at(1);
  node.simulate(
    'change',
    {
      target:
       { name: 'username', value: username },
    },
  );
  expect(node.instance().value).toBe(username);
  wrapper.find('#signup-form').simulate(
    'submit',
    { preventDefault() {} },
  );
  node = wrapper.find('#username').at(1);
  node.simulate(
    'change',
    {
      target:
       { name: 'username', value: '' },
    },
  );
  expect(node.instance().value).toBe('');
  wrapper.find('#signup-form').simulate(
    'submit',
    { preventDefault() {} },
  );

  wrapper.find('#email').at(1).simulate(
    'change',
    {
      target:
       { name: 'email', value: '' },
    },
  );

  // fill in weak password
  password = '';
  node = wrapper.find('#password').at(1).simulate(
    'change',
    {
      target:
       { name: 'password', value: password },
    },
  );

  expect(node.instance().value).toBe(password);
  wrapper.find('#signup-form').simulate(
    'submit',
    { preventDefault() {} },
  );
});
