import React from 'react';
import PropTypes from 'prop-types';
import FixedMenu from '../../components/Menu/FixedMenu';
import Logo from '../../components/Menu/Logo';

const TemplateWithMenu = ({ children }) => (
  <React.Fragment>
    <FixedMenu fixed="" hidden="" RightMenu={() => ''} />
    <div className="pusher">
      <Logo />

      {children}
    </div>
  </React.Fragment>
);

TemplateWithMenu.propTypes = { children: PropTypes.element.isRequired };

export default TemplateWithMenu;
