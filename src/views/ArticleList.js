import React from 'react';
import ArticleList from '../containers/Article/ArticleList';
import Template from './Templates/TemplateWithMenu';

const ArticleListPage = ({ ...props }) => (
  <Template>
    <ArticleList {...props} />
  </Template>
);

export default ArticleListPage;
