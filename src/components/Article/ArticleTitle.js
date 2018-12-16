import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const ArticleTitle = (props) => {
  const { onChange, title, errors } = props;
  return (
    <Form.Field>
      <input name="title" value={title} onChange={onChange} type="text" placeholder="Title" className="post__title" />
      {errors.title
              && <div className="ui pointing red basic label">{errors.title}</div>
              }
    </Form.Field>
  );
};

ArticleTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default ArticleTitle;
