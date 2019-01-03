import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Dropdown } from 'semantic-ui-react';
import { removeToken, getToken } from '../../utils';
import { PROFILE_AVATAR, TOKEN_KEY } from '../../constants';


const AuthMenuItem = ({ ...props }) => {
  const { authenticated, history } = props;
  const trigger = (
    <span>
      <Image avatar src={PROFILE_AVATAR} />
      {' '}
      {getToken().username || 'Username'}
    </span>
  );
  const options = [
    {
      key: 'user',
      text: 'Profile',
      icon: 'user',
      onClick: () => {
        history.push('/profile');
      },
    },
    {
      key: 'settings',
      text: 'New Article',
      icon: 'plus circle',
      onClick: () => {
        history.push('/article');
      },
    },
    {
      key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: () => removeToken(TOKEN_KEY, true),
    },
  ];
  return (

    <React.Fragment>
      {!authenticated
        ? (
          <React.Fragment>
            <div className="item" id="login">
              <Link to="/login">
                <span className="ui primary button ">Login</span>
              </Link>

            </div>
            <div className="item">
              <a href="/signup">
                <span className="ui primary button theme-button-color">Sign Up</span>
              </a>
            </div>
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <div className="item">
              <Dropdown trigger={trigger} options={options} pointing="top left" />
            </div>
          </React.Fragment>
        )

        }
    </React.Fragment>

  );
};

AuthMenuItem.propTypes = {
  authenticated: PropTypes.bool,
  history: PropTypes.shape({}).isRequired,
};
AuthMenuItem.defaultProps = {
  authenticated: false,
};
export default AuthMenuItem;
