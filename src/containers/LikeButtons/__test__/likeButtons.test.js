import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
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
};

it('renders LikeButton component without crashing', () => {
  const handleLike = jest.fn();
  const handleDislike = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <LikeButton {...props} />
    </Provider>,
  );
  const likeBtn = wrapper.find('#like-btn');
  const dislikeBtn = wrapper.find('#dislike-btn');
  const likeWrapper = mount(<likeBtn onClick={handleLike} />);
  const dislikeWrapper = mount(<dislikeBtn onClick={handleDislike} />);
  likeWrapper.simulate('click');
  dislikeWrapper.simulate('click');
  expect(handleLike.mock.calls.length).toEqual(1);
  expect(handleDislike.mock.calls.length).toEqual(1);
});
