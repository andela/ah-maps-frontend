import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute } from '../Private';

const func = () => (<span>hello</span>);
describe('Private route', () => {
  it('should render protected route', () => {
    const wrapper = shallow(<PrivateRoute component={func()} />);
    expect(wrapper).toBeDefined();
  });
});
