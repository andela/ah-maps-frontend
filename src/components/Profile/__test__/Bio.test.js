/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { Bio } from '../Bio';

it('renders Profile component without crashing', () => {
  shallow(
    <Bio
      profile={[]}
      avatar
      followers
      following
    />,
  );
});
