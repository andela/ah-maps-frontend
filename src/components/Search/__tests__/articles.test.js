import React from 'react';
import { mount } from 'enzyme';
import Articles from '../Articles';
import { ARTICLE } from '../../../constants';

const history = { push: () => {} };
let slug = { slug: '' };
const ARTICLE2 = { ...ARTICLE, image: '' };
const wrapper = mount(
  <Articles
    match={{ params: slug }}
    history={history}
    items={[ARTICLE]}
  />,
);
slug = { slug: 'hello-world' };

const wrapper2 = mount(
  <Articles
    match={{ params: slug }}
    history={history}
    items={[ARTICLE2]}
  />,
);
describe('Search <Articles />', () => {
  it('should render articles search component without crashing', () => {
    const node = wrapper.find('.pointer');
    expect(node.length).toBe(1);
    node.simulate('click');
  });
  it('should test redirect function', () => {
    const node = wrapper2.find('.pointer');
    expect(node.length).toBe(1);
    node.simulate('click');
  });
});
