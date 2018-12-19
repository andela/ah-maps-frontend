import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Rating from '../index';
import ArticleCard from '../../../components/Article/ArticleCard';
import store from '../../../redux/store';

const props = {
  author: {
    name: 'Tony',
    followers: {
      length: 1,
    },
  },
};

describe('Rating class', () => {
  it('renders Rating component without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Rating />
      </Router>
    </Provider>);
    expect(wrapper.find('.rating')).toHaveLength(1);
  });
});
