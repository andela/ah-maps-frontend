import React from 'react';
import Article from '../containers/Article';
import Template from './Templates/TemplateWithMenu';

const LandingPage = ({ ...props }) => (
  <Template {...props}>
    <Article {...props} />
  </Template>
);

export default LandingPage;
