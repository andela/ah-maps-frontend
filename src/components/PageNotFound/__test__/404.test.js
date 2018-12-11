/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

it('renders 404 component without crashing', () => {
  shallow(
    <App />,
  );
});
