import React from 'react';
import { shallow } from 'enzyme';
import CommentThreadCard from '../CommentThreadCard';

describe('<CommentThreadCard />', () => {
  it('renders CommentThreadCard component without crashing', () => {
    shallow(
      <CommentThreadCard
        body=""
        slug=""
        id={0}
        refresh={() => {}}
        author={{}}
        date=""
      />,
    );
  });
});
