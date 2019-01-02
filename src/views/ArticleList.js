import React from 'react';
import { Container } from 'semantic-ui-react';
import ArticleList from '../containers/Article/ArticleList';
import Template from './Templates/TemplateWithMenu';

const ArticleListPage = ({ ...props }) => (
  <Template {...props}>
    <Container>
      <ArticleList {...props} />
    </Container>
  </Template>
);

export default ArticleListPage;
