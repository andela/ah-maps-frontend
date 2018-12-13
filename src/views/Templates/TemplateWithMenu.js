import React from 'react';
import PropTypes from 'prop-types';
import FixedMenu from '../../components/Menu/FixedMenu';
import Logo from '../../components/Menu/Logo';

const TemplateWithMenu = ({ children }) => (
  <React.Fragment>
<<<<<<< HEAD
    <FixedMenu fixed="fixed" hidden="" RightMenu={() => ''} />
    <div className="pusher">
      <Logo />
      <div className="main-content">
        {children}
      </div>
=======
    <FixedMenu fixed="" hidden="" RightMenu={() => ''} />
    <div className="pusher">
      <Logo />

      {children}
>>>>>>> feat(react router): implement authentication on routes (#17)
    </div>
  </React.Fragment>
);

TemplateWithMenu.propTypes = { children: PropTypes.element.isRequired };

export default TemplateWithMenu;
