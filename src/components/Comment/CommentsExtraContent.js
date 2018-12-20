import React from 'react';
import PropTypes from 'prop-types';

const CommentsExtraContent = ({ ...props }) => {
  const {
    handleEditToggle, showDeleteModal, showReplyModal,
  } = props;
  return (
    <div>
      <div className="extra content">
        <span onClick={handleEditToggle}>
          <i className="edit icon" />
            &nbsp;&nbsp;Edit
        </span>
        <span>&nbsp;&nbsp;</span>
        <span onClick={showDeleteModal}>
          <i className="trash icon" />
            &nbsp;&nbsp;Delete
        </span>
        <span>&nbsp;&nbsp;</span>
        <span onClick={showReplyModal}>
          <i className="reply icon" />
            &nbsp;&nbsp;Reply
        </span>
        <div />
      </div>
    </div>

  );
};

CommentsExtraContent.propTypes = {
  handleEditToggle: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showReplyModal: PropTypes.func.isRequired,


};
export default CommentsExtraContent;
