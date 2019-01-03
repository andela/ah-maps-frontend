import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AVATAR } from '../../constants';
import './Bio.sass';
import Avatar from './Avatar';
import Ourmodal from './Ourmodal';
import Followers from './Followmodal';

export class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: AVATAR,
    };
  }

  render() {
    const {
      profile, followers, following, followingData, followersData
    } = this.props;
    const { avatar } = this.state;
    return (
      <div className="Bio">
        <div className="ui text-center">
          <div className="row">
            <div className="ui bio-data">
              <Avatar title={profile.username} source={profile.image || avatar} alt={profile.username} />
              <p className="ui text center text-muted bio-text">{profile.username}</p>
              <p className="ui text center text-muted bio-text">{profile.bio}</p>
            </div>
          </div>
          <br />
          <div className="edit">
            <Ourmodal className="editProfile" profile={profile} />
          </div>
        </div>
        <Followers followers={followersData} following={followingData} followingCount={following} followersCount={followers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, null)(Bio);
