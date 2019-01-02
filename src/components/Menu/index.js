import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import AuthMenuItem from './AuthMenuItem';
import { isLoggedIn } from '../../utils/auth';

export default class MenuExampleBasic extends Component {
  state = {}

  render() {
    return (
      <Menu secondary inverted pointing className="large align-items-right">
        <Menu.Item className="toc">
          <i className="sidebar icon" />
        </Menu.Item>
        <div className="right menu">
          <AuthMenuItem {...this.props} authenticated={isLoggedIn()} />
        </div>
      </Menu>
    );
  }
}
