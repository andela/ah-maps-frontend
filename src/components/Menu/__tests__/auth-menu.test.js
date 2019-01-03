/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import AuthMenuItem from '../AuthMenuItem';

const options = new ReactRouterEnzymeContext();
describe('<AuthMenuItem />', () => {
  it('renders Menu without authentication component without crashing', () => {
    const wrapper = mount(
      <AuthMenuItem
        authenticated={false}
        history={{}}
      />,
      options.get(),
    );
    const node1 = wrapper.find('#login');
    expect(node1).toHaveLength(1);
  });
});
