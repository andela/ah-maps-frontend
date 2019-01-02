import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Result from '../Result';

const options = new ReactRouterEnzymeContext();
const wrapper = mount(
  <Result
    searchKey="search"
    searchValue="how to"
  />,
  options.get(),
);
describe('<Result />', () => {
  it('should render results search component without crashing', () => {
    const node = wrapper.find('.text-muted');
    expect(node.length).toBe(2);
  });
});
