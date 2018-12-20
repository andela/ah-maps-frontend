import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, TextArea,
} from 'semantic-ui-react';

const CommentModal = ({ ...props }) => {
  const {
    openReply, closeReplyModal, size, handleReplyChange, handleReply,
  } = props;
  return (

    <div>
      <Modal size={size} open={openReply} onClose={closeReplyModal}>
        <Modal.Header>Reply to the Comment</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <TextArea autoHeight placeholder="Type your reply here" onChange={handleReplyChange} />
            </Form.Field>
          </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={closeReplyModal}>Cancel</Button>
          <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Reply" onClick={handleReply} />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

CommentModal.propTypes = {
  closeReplyModal: PropTypes.func.isRequired,
  handleReply: PropTypes.func.isRequired,
  handleReplyChange: PropTypes.func.isRequired,
  openReply: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,


};
export default CommentModal;
