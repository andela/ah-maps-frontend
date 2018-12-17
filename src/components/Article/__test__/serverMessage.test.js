/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ServerMessage from '../ServerMessage';

const articles = { success: true, errors: { message: 'errors' } };

describe('<ServerMessage />', () => {
  it('renders ServerMessage component without crashing', () => {
    shallow(
      <ServerMessage articles={articles} />,
    );
    articles.success = false;
    shallow(
      <ServerMessage articles={articles} />,
    );
  });
});
