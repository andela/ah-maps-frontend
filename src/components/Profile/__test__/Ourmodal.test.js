/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../Ourmodal';
import { USER_TOKEN } from '../../../constants';
import { setToken } from '../../../utils';

it('renders Profile component without crashing', () => {
  setToken(USER_TOKEN);
  shallow(
    <Edit
      profile={[]}
      avatar
      imageUpload
      username
      bio
      onSubmit
    />,
  );
});
