import React from 'react';
import { shallow } from 'enzyme';
import { CommentsCard } from '../CommentsCard';
import { api } from '../../../utils/api';

describe('<CommentsCard />', () => {
  it('renders CommentsCard component without crashing', () => {
    shallow(
      <CommentsCard
        body=""
        author={{}}
        date=""
        slug=""
        refresh={() => {}}
        createthread={api.comment.createthread}
        removeComment={api.comment.delete}
        id={9}
        editcomment={api.comment.edit}
      />,
    );
  });
});
