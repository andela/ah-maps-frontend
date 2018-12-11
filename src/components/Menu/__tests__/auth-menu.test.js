/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import AuthMenuItem from '../AuthMenuItem';

const options = new ReactRouterEnzymeContext();
describe('<AuthMenuItem />', () => {
  it('renders Menu without authentication component without crashing', () => {
    const wrapper = mount(
      <AuthMenuItem authenticated={false} />, options.get(),
    );
    expect(wrapper.find('#login')).toHaveLength(1);
  });

  it('renders AuthMenuItem authentication component without crashing', () => {
    const wrapper = mount(
      <AuthMenuItem authenticated />, options.get(),
    );
    const node = wrapper.find('#logout');
    expect(node).toHaveLength(1);
    node.simulate('click');
  });
});
