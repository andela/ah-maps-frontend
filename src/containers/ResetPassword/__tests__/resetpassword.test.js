import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ResetPassword from '../index';
import { store } from '../../../redux/store';

const password = 'abcd1234ABCD';
const props = {
  match: {
    params: {
      token: 'some token',
    },
  },
};

it('renders ResetPassword component without crashing', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <ResetPassword {...props} />
      </Router>
    </Provider>,
  );

  const node = wrapper.find('#password');
  node.simulate(
    'change',
    {
      target:
       { name: 'password', value: password },
    },
  );
  expect(node.instance().value).toBe(password);


  wrapper.find('#resetpasswordform').simulate(
    'submit',
    { preventDefault() {} },
  );
});
