import React from 'react';

export const Input = ({ ...props }) => {
  const {
    onChange,
    className,
    icon,
    errors,
    ...rest
  } = props;
  return (
    <div className="field">
      <div className="ui left icon input">
        <i className={`${icon} icon`} />
        <input {...rest} className={className} onChange={onChange} />
      </div>
      {errors
      && (
      <div className="ui pointing red basic label">
        {errors}
      </div>
      )
      }
    </div>
  );
};

export default Input;
