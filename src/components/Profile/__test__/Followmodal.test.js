/* eslint-env jest */
import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { store } from '../../../redux/store';
import Followers from '../Followmodal';

const props = {
  followers: [],
  following: [],
  followersCount: 0,
  followingCount: 0,
};

it('renders the Follow buttons without crashing', () => {
  shallow(<Followers {...props} />);

  const handleFollowers = jest.fn();
  const handleFollowing = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <Followers {...props} />
    </Provider>,
  );
  const followersBtn = wrapper.find('#followers-btn');
  const followingBtn = wrapper.find('#following-btn');
  const followersWrapper = mount(<followersBtn onClick={handleFollowers} />);
  const followingWrapper = mount(<followingBtn onClick={handleFollowing} />);
  followersWrapper.simulate('click');
  followingWrapper.simulate('click');
  expect(handleFollowers.mock.calls.length).toEqual(1);
  expect(handleFollowing.mock.calls.length).toEqual(1);
});
