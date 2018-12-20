import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, TextArea,
} from 'semantic-ui-react';

const CommentEditForm = ({ ...props }) => {
  const {
    handleEditToggle, handleChange, handleEdit, data,
  } = props;
  return (

    <div className="card comment-box">
      <div className="content">
        <Form>
          <Form.Field>
            <TextArea autoHeight placeholder="Try adding multiple lines" value={data} onChange={handleChange} />
          </Form.Field>
          <button type="submit" className="ui medium teal button" onClick={handleEdit}>Edit Comment</button>
          <button
            className="ui medium secondary button"
            onClick={handleEditToggle}
            type="button"
          >
          Cancel
          </button>
        </Form>
      </div>
    </div>
  );
};

CommentEditForm.propTypes = {
  handleEditToggle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,


};
export default CommentEditForm;
