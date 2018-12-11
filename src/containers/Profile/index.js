import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bio } from '../../components/Profile/Bio';
import { getToken } from '../../utils/auth';
import {
  getProfile,
} from '../../redux/actions/profile';

export class Profile extends Component {
  componentDidMount() {
    const user = getToken();

    const { user: { username } } = user;
    const { dispatch } = this.props;
    dispatch(getProfile(username));
  }

  render() {
    const {
      profile, followers, following,
    } = this.props;

    return (
      <div>
        <Bio
          profile={profile}
          followers={followers}
          following={following}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: state.profileReducer.followers,
  following: state.profileReducer.following,
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps)(Profile);
