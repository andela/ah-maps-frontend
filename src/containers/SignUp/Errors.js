import React from 'react';


const Error = ({ ...props }) => {
  const { errors, ...rest } = props;
  const _ = [];

  Object.keys(errors).forEach((key) => {
    _.push(errors[key]);
  });
  const listItems = _.map(value => <div className="ui red" key={value}>{value}</div>);

  return (
    <div {...rest} className="ui floating message error">
      { listItems }
    </div>
  );
};

export default Error;
