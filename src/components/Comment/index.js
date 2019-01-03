import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Message from '../Signup/Message';
import './styles.sass';

const CommentArea = (props) => {
  const {
    handleSubmit, onChange, value, comments,
  } = props;
  return (
    <div className="comment-area">
      {comments.success
             && Object.keys(comments.errors).length > 0
              && <Message errors={comments.errors} status={comments.status} />
            }
      {!comments.success
             && Object.keys(comments.errors).length > 0
              && <Message errors={comments.errors} status={comments.status} />
            }
      <Form onSubmit={handleSubmit}>
        <p> Add a Comment </p>
        <TextArea autoHeight  placeholder="Type your comment here" onChange={onChange} value={value} />
        <p>
          <button type="submit" className="ui medium teal button">Comment</button>
        </p>

      </Form>
    </div>

  );
};

CommentArea.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf.isRequired,
};

export default CommentArea;
