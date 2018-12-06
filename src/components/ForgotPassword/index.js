import React from 'react';

const Message = ({ ...props }) => {
  const { success, message, ...rest } = props;
  return (
    <div className={success ? 'ui success-message message' : 'ui error-message message'}>
      <div className="content" {...rest}>
        <p>{ message }</p>
      </div>
    </div>
  );
};

export default Message;
