import React from 'react';
import ArticleView from '../../containers/Article/ArticleView';
import Template from '../Templates/TemplateWithMenu';

const ArticleViewPage = ({ ...props }) => (
  <Template>
    <ArticleView {...props} />
  </Template>
);

export default ArticleViewPage;
