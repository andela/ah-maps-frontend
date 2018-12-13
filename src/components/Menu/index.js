import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import AuthMenuItem from './AuthMenuItem';
<<<<<<< HEAD
import { isLoggedIn } from '../../utils';
=======
import { isLoggedIn } from '../../utils/auth';
>>>>>>> feat(react router): implement authentication on routes (#17)

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary inverted pointing className="large align-items-right">
        <Menu.Item className="toc">
          <i className="sidebar icon" />
        </Menu.Item>
        <Menu.Item
          name="editorials"
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
        Politics
        </Menu.Item>
        <Menu.Item>
            Religion
        </Menu.Item>

        <Menu.Item name="reviews" active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Reviews
        </Menu.Item>

        <AuthMenuItem authenticated={isLoggedIn()} />
      </Menu>
    );
  }
}
