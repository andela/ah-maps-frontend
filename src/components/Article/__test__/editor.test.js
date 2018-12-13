/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Editor from '../Editor';

describe('<Editor />', () => {
  it('renders component without crashing', () => {
    shallow(
      <Editor body="" />,
    );
    shallow(
      <Editor
        body="[{}]"
      />,
    );
  });
});
