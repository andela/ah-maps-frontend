import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Fragment>
    <Link to="/">
      <img className="logo" alt="logo" src="http://github.andela.com/ah-maps/images/logo.svg" />
    </Link>
  </Fragment>

);

export default Logo;
