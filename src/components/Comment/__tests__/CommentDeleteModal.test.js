import React from 'react';
import { shallow } from 'enzyme';
import CommentDeletelModal from '../CommentDeleteModal';

describe('<CommentModal />', () => {
  it('renders CommentModal component without crashing', () => {
    shallow(
      <CommentDeletelModal>
        <span>Children</span>
      </CommentDeletelModal>,
    );
  });
});
