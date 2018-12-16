import React from 'react';
import Article from '../containers/Article';
import Template from './Templates/TemplateWithMenu';

const LandingPage = ({ ...props }) => (
  <Template>
    <Article {...props} />
  </Template>
);

export default LandingPage;
