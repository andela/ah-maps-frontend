import React from 'react';
import './style.sass';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const tagList = ({ ...props }) => {
  const {
    tags,
  } = props;

  return (

    <Label.Group color="#ffffff" className="tag-container">
      { tags.map(value => <Label as="a">{value}</Label>) }
    </Label.Group>
  );
};

tagList.propTypes = {
  tags: PropTypes.arrayOf.isRequired,
};

export default tagList;
