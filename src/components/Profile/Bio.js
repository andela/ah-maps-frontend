import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { AVATAR } from '../../constants';
import './Bio.sass';
import Avatar from './Avatar';
import Ourmodal from './Ourmodal';

export class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: AVATAR,
    };
  }

  render() {
    const {
      profile, followers, following,
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
        <div className="ui row follow-row">
          <div className="ui bio-following text center follow-data">
            <h6>
              <a href="true">
                <Icon name="user" />
                {followers}
              </a>
              followers
            </h6>
          </div>
          <div className="ui row follow-row2">
            <div className="ui text-center">
              <h6>
                <a href="true">
                  <Icon name="user" />
                  {following}
                </a>
                following
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, null)(Bio);
