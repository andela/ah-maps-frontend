import React from 'react';


const Message = ({ ...props }) => {
  const { errors, status, ...rest } = props;
  let _ = [];

  Object.keys(errors).forEach((key) => {
    _.push(errors[key]);
  });
  const listItems = _.map(value => <div className={`ui ${status}`} key={value}>{value}</div>);
  _ = [];

  return (
    <div {...rest} className={`ui floating message ${status}`}>
      { listItems }
    </div>
  );
};

export default Message;
