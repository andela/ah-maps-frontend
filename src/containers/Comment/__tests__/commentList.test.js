import React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from '../commentList';
import { api } from '../../../utils/api';

describe('<CommentList />', () => {
  it('renders ArticleList component without crashing', () => {
    shallow(
      <CommentList
        slug=""
        fetchComments={api.comment.list}
        addComments={api.comment.create}
        comments={[]}
      />,
    );
  });
});
