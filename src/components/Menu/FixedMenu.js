import React from 'react';
import PropTypes from 'prop-types';
import AuthMenuItem from './AuthMenuItem';
import Search from '../../containers/Search';
import { isLoggedIn } from '../../utils';

const FixedMenu = ({ ...props }) => {
  const { fixed, hidden, RightMenu } = props;
  return (
    <div className={`ui large top secondary inverted ${fixed} ${hidden} menu`}>
      <div className="ui container">
        <div className="right menu">
          <Search {...props} />
          <RightMenu />
          <AuthMenuItem {...props} authenticated={isLoggedIn()} />
        </div>
      </div>
    </div>
  );
};

FixedMenu.propTypes = {
  fixed: PropTypes.string,
  hidden: PropTypes.string,
  RightMenu: PropTypes.func.isRequired,
};

FixedMenu.defaultProps = {
  fixed: 'fixed',
  hidden: 'hidden',
};

export default FixedMenu;
