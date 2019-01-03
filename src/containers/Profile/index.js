import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bio } from '../../components/Profile/Bio';
import { getToken } from '../../utils/auth';
import {
  getProfile, profileFetched,
} from '../../redux/actions/profile';

export class Profile extends Component {
  componentDidMount() {
    const user = getToken();

    const { username } = user;
    const { fetchProfile, fetchedProfile } = this.props;
    fetchProfile(username)
      .then((response) => {
        fetchedProfile(response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      profile, followers, following, followingData, followersData
    } = this.props;

    return (
      <div>
        <Bio
          profile={profile}
          followers={followers}
          following={following}
          followingData={followingData}
          followersData={followersData}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: state.profileReducer.followers,
  following: state.profileReducer.following,
  profile: state.profileReducer.profile,
  followingData: state.profileReducer.followingData,
  followersData: state.profileReducer.followersData,

});

const mapDispatchToProps = {
  fetchProfile: getProfile,
  fetchedProfile: profileFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
