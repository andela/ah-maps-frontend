import React from 'react';
import { shallow } from 'enzyme';
import CommentEditForm from '../CommentEditForm';

describe('<CommentEditForm />', () => {
  it('renders CommentEditForm component without crashing', () => {
    shallow(
      <CommentEditForm>
        <span>Children</span>
      </CommentEditForm>,
    );
  });
});
