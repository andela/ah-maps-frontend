import React from 'react';
import ReactDOM from 'react-dom';
import FollowBtn from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
