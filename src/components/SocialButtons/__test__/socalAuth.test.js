import React from 'react';
import { mount } from 'enzyme';
import { SocialAuth, responseHandler } from '..';

const token = 'yya29.GlxpBrhUQyDBTqhUlEaz4WfrvLn2XfhpUfhZync2FXWyuqCHNzU2SWyCtBsF1Iubs6l6uceC8lnEf9bQJfFFttQWvoy1syMOWOeKlwl-wxusc1eN5pYHf3l9wpc1Jg';
const email = 'me@maps.com';

it('should test google button', () => {
  const wrapper = mount(<SocialAuth />);
  wrapper.find('#google-btn').at(0).simulate('click');
});

it('should test facebook button', () => {
  const wrapper = mount(<SocialAuth />);
  wrapper.find('#fb-btn').at(0).simulate('click');
});

it('should simulate request handler for google function', () => {
  responseHandler({ accessToken: token });
});

it('should simulate request handler for facebook function', () => {
  responseHandler({ accessToken: token, email });
});
