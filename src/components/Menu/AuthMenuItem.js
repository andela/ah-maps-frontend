import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { removeToken } from '../../utils/auth';

const AuthMenuItem = ({ ...props }) => {
  const { authenticated } = props;

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
              <Link to="/profile">
                <Icon name="user" size="big" />
              </Link>
            </div>
            <div className="item">
              <Link to="/article">
                <Icon name="plus circle" size="big" />
              </Link>
            </div>
            <div className="item">
              <a href="#logout" id="logout" onClick={() => removeToken()}>
                <span className="ui primary button theme-button-color">Logout</span>
              </a>
            </div>
          </React.Fragment>
        )

        }
    </React.Fragment>

  );
};

AuthMenuItem.propTypes = {
  authenticated: PropTypes.bool,
};
AuthMenuItem.defaultProps = {
  authenticated: false,
};
export default AuthMenuItem;
