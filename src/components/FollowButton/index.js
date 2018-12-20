import React, { Component } from 'react';
import './style.sass';
import { isLoggedIn, getToken } from '../../utils/auth';
import { api } from '../../utils/api';

export class FollowButton extends Component {
  static propTypes = {

  }

  state = {
    following: false,
    loading: false,
  }

  componentWillMount() {
    // fetch logged in user following
    if (isLoggedIn()) {
      const user = getToken();
      const { username } = user;

      const { author } = this.props;
      api.user.following(username)
        .then((response) => {
          const { data } = response;
          const { following } = data;
          // check if author is in following
          const found = following.find(element => element.user__username === author.username);
          if (found === undefined) {
            this.setState({ following: true });
          } else {
            this.setState({ following: false });
          }
        })
        .catch(err => console.warn(err));
    }
  }


  followHandler = () => {
    const { following } = this.state;
    const { author } = this.props;
    this.setState({ loading: true });

    if (!following) {
      api.user.unfollowUser(author.username)
        .then(() => {
          this.setState({ following: true, loading: false });
        })
        .catch((err) => { console.warn(err); this.setState({ loading: false }); });
    } else {
      api.user.followUser(author.username)
        .then(() => {
          this.setState({ following: false, loading: false });
        })
        .catch((err) => { console.warn(err); this.setState({ loading: false }); });
    }
  }

  render() {
    const { following, loading } = this.state;
    return (
      <div className={loading ? 'ui loading form FollowBtn' : 'FollowBtn'}>
        <button className={isLoggedIn() ? 'button-follow' : 'hidden button-follow'} type="button" onClick={this.followHandler}>
          {following && <span>Follow</span>}
          {!following && <span>unFollow</span>}
        </button>
      </div>
    );
  }
}


export default FollowButton;
