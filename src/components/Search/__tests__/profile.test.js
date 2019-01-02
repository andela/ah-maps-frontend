import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Profiles from '../Profiles';
import { ARTICLE } from '../../../constants';

const options = new ReactRouterEnzymeContext();
const history = { push: () => {} };
let slug = { slug: '' };
const ARTICLE2 = { ...ARTICLE, image: '' };
const wrapper = mount(
  <Profiles
    match={{ params: slug }}
    history={history}
    items={[ARTICLE.author]}
  />,
  options.get(),
);
slug = { slug: 'hello-world' };

const wrapper2 = mount(
  <Profiles
    match={{ params: slug }}
    history={history}
    items={[ARTICLE2.author]}
  />,
  options.get(),
);
describe('<Profiles />', () => {
  it('should render articles search component without crashing', () => {
    const node = wrapper.find('.search__dropdown_item');
    expect(node.length).toBe(1);
  });
  it('should test redirect function', () => {
    const node = wrapper2.find('.search__dropdown_item');
    expect(node.length).toBe(1);
  });
});
