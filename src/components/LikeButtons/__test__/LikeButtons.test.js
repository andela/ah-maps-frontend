import React from 'react';
import ReactDOM from 'react-dom';
import LikeBtn from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LikeBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
