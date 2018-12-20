import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button,
} from 'semantic-ui-react';

const CommentDeleteModal = ({ ...props }) => {
  const {
    openDelete, closeDeleteModal, handleDelete, size,
  } = props;
  return (
    <div>
      <Modal size={size} open={openDelete} onClose={closeDeleteModal}>
        <Modal.Header>Delete Your Comment</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your comment</p>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={closeDeleteModal}>No</Button>
          <Button className="ui medium teal button" icon="checkmark" labelPosition="right" content="Yes" onClick={handleDelete} />
        </Modal.Actions>
      </Modal>
    </div>

  );
};

CommentDeleteModal.propTypes = {
  openDelete: PropTypes.func.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,


};
export default CommentDeleteModal;
