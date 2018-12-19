import React from 'react';

import './style.sass';

const avatar = ({ title, source, alt }) => (
  <img className="Avatar" title={title} src={source} alt={alt} />
);

export default avatar;
