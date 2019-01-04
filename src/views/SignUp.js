import React from 'react';
import TemplateWithoutMenu from './Templates/TemplateWithoutMenu';
import SignUp from '../containers/SignUp';

const SignUpPage = ({ ...props }) => (
  <TemplateWithoutMenu {...props}>
    <SignUp {...props} />
  </TemplateWithoutMenu>
);

export default SignUpPage;
