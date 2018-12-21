import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import FollowBtn from '..';
import { setToken } from '../../../utils';
import { USER_TOKEN } from '../../../constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should hide follow button when user is not logged in', () => {
  const wrapper = mount(<FollowBtn author={{ author: { username: 'name.' } }} />);
  const node = wrapper.find('.button-follow');
  const node2 = wrapper.find('.hidden');
  expect(node2.length).toBe(1);
  setToken(USER_TOKEN);
  node.simulate('click');
  const node3 = wrapper.find('.hidden');
  expect(node3.length).toBe(0);
});
