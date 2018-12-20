import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Tag from '../index';
import store from '../../../redux/store';


describe('Rating class', () => {
  it('renders Rating component without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <Router>
        <Tag />
      </Router>
    </Provider>);
    expect(wrapper.find('.css-1hwfws3')).toHaveLength(1);
  });
});
