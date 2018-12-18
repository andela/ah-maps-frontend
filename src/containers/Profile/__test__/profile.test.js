/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Profile } from '..';
import { PROFILE, USER_TOKEN } from '../../../constants';
import { setToken } from '../../../utils';
import { api } from '../../../utils/api';

const options = new ReactRouterEnzymeContext();
describe('<ProfileContainer />', () => {
  it('renders Profile component without crashing', () => {
    setToken(USER_TOKEN);
    shallow(
      <Profile
        profile={PROFILE}
        match={{ params: PROFILE.username }}
        editProfile={() => {}}
        fetchProfile={api.user.editProfile}
      />, options,
    );
  });
});
