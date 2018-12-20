import React from 'react';
import { shallow } from 'enzyme';
import CommentsExtraContent from '../CommentsExtraContent';

describe('<CommentModal />', () => {
  it('renders CommentModal component without crashing', () => {
    shallow(
      <CommentsExtraContent>
        <span>Children</span>
      </CommentsExtraContent>,
    );
  });
});
