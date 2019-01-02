import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Tags from '../Tags';

const options = new ReactRouterEnzymeContext();
const wrapper = mount(
  <Tags
    items={['name']}
  />,
  options.get(),
);
describe('<Profiles />', () => {
  it('should render articles search component without crashing', () => {
    const node = wrapper.find('.search__dropdown_item');
    expect(node.length).toBe(1);
  });
});
