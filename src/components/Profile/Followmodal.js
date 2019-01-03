import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, List, Image } from 'semantic-ui-react';
import './Follow.sass';

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      option: true,
    };
  }

  showModal = (size) => {
    this.setState({ size, open: true });
  };

  setOption = (opt) => {
    // true == followers
    if (opt === 'followers') {
      this.setState({ option: true });
    } else if (opt === 'following') {
      // false == following
      this.setState({ option: false });
    }
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  render() {
    const {
      followers, following, followersCount, followingCount,
    } = this.props;
    const types = this.state.option ? followers : following;
    const { open, size } = this.state;
    return (
      <div className="followers centerme">
        <Modal size={size} open={open} onClose={this.closeModal} centered={false}>
          <Modal.Header>{this.state.option ? 'followers' : 'following'}</Modal.Header>
          <Modal.Content>
            <List>
              { types.map((item, _) => (
                <List.Item>
                  <Image avatar src={item.image} />
                  <List.Content>
                    <List.Header as="a">{ item.user__username }</List.Header>
                    <List.Description>
                      <p>
                        {' '}
                        { this.state.options ? 'follower' : 'following' }
                        {' '}
                      </p>
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Modal.Content>
        </Modal>

        <div className="ui labeled button" id="followers-btn" onClick={() => { this.showModal('tiny'); this.setOption('followers'); }}>
          <div className="ui basic button">
            <i className="user icon" />
            {' '}
            Followers
          </div>
          <a className="ui basic left pointing label">
            { followersCount }
          </a>
        </div>
        <div className="ui labeled button" id="following-btn" onClick={() => { this.showModal('tiny'); this.setOption('following'); }}>
          <div className="ui basic button">
            <i className="user icon" />
            {' '}
            Following
          </div>
          <a className="ui basic left pointing label">
            { followingCount }
          </a>
        </div>
      </div>
    );
  }
}

Followers.propTypes = {
  followers: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired,
  followersCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
};

export default Followers;
