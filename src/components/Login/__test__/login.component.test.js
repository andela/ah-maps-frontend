/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Login from '..';

it('renders Login component without crashing', () => {
  shallow(
    <Login
      loginInputs={[]}
      visible
      renderMessage={() => 'span'}
      login={{}}
    />,
  );
});
