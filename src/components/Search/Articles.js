import React from 'react';
import { Image } from 'semantic-ui-react';
import { ARTICLE_IMAGE } from '../../constants';

export const redirect = (history, slug, params) => {
  const path = params.slug ? 'articles' : 'article';
  history.push(`/${path}/${slug}`);
};
const Articles = (props) => {
  const { items, history, match: { params } } = props;
  return (
    items.map(value => (
      <div onClick={() => redirect(history, value.slug, params)} role="presentation" className="search__dropdown_item ui cursor pointer" key={value.title}>
        <div>
          <Image src={value.image || ARTICLE_IMAGE} avatar />
          <span>{value.title.substring(0, 30)}</span>
        </div>
      </div>
    ))
  );
};

export default Articles;
