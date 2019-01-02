import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { Search } from '../index';
import { ARTICLE } from '../../../constants';
import { api } from '../../../utils/api';

const options = new ReactRouterEnzymeContext();
const wrapper = mount(
  <Search
    authors={[]}
    articles={[ARTICLE]}
    match={{ params: {} }}
    tags={['name']}
    searchArticles={api.article.single}
  />, options.get(),
);
const node = wrapper.find('#search-input').at(1);
const search = 'search';

describe('<Search  />', () => {
  it('should render search compoinent without clashing', () => {
    expect(node.length).toBe(1);
  });
  it('should simulate search event', () => {
    node.simulate(
      'change',
      {
        target:
       { name: 'search', value: search },
      },
    );
    expect(node.instance().value).toEqual(search);
  });
});
