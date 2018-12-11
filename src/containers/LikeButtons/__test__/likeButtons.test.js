import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import LikeButton from '..';
import { store } from '../../../redux/store';
import {
  liker, disliker, getLikes,
} from '../../../redux/actions';
import { USER_TOKEN } from '../../../constants';
import { setToken } from '../../../utils/auth';

setToken(USER_TOKEN);

const props = {
  liked: false,
  likeCount: 0,
  disliked: false,
  dislikeCount: 0,
  addLike: liker,
  addDislike: disliker,
  fetchLikes: getLikes,
}

it('renders LikeButton component without crashing', () => {
  const wrapper = mount(
    <Provider store={store} >
      <LikeButton  {...props} />
    </Provider>
  );
  expect(wrapper.find('#like-btn')).toHaveLength(1);
  expect(wrapper.find('#dislike-btn')).toHaveLength(1);
  wrapper.find('#like-btn').simulate('click');
  wrapper.find('#dislike-btn').simulate('click');
});
