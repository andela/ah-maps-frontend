import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

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

        <Menu.Item className="login-signup">
          <a href="#/login">
            <span className="ui inverted button">
          Login
            </span>
          </a>
          <a href="/signup">
            <span className="ui inverted button">
          Sign Up
            </span>
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
