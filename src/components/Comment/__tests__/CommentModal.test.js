/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import CommentModal from '../CommentModal';

describe('<CommentModal />', () => {
  it('renders CommentModal component without crashing', () => {
    shallow(
      <CommentModal>
        <span>Children</span>
      </CommentModal>,
    );
  });
});
