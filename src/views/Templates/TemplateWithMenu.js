import React from 'react';
import PropTypes from 'prop-types';
import FixedMenu from '../../components/Menu/FixedMenu';
import Logo from '../../components/Menu/Logo';

const TemplateWithMenu = ({ children, ...props }) => (
  <React.Fragment>
    <FixedMenu {...props} fixed="fixed" hidden="" RightMenu={() => ''} />
    <div className="pusher">
      <Logo />
      <div className="main-content">
        {children}
      </div>
    </div>
  </React.Fragment>
);

TemplateWithMenu.propTypes = { children: PropTypes.element.isRequired };

export default TemplateWithMenu;
