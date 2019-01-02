import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const Tags = (props) => {
  const { items } = props;
  return (
    items.map(value => (
      <div className="search__dropdown_item" key={value}>
        <div as="h4">
          <Link to={`/tags/${value}`}>
            <Icon name="tag" />
            <div className="tag__name">{value}</div>
          </Link>
        </div>
      </div>
    ))
  );
};

export default Tags;
