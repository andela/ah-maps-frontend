import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TagList from '..';
import store from '../../../redux/store';


const props = {
  tags: ['one', 'two'],
};


describe('Rating class', () => {
  it('renders Rating component without crashing', () => {
    const wrapper = mount(<Provider store={store}>
      <Router>
        <TagList {...props} />
      </Router>
    </Provider>);

    expect(wrapper.find('.tag-container')).toHaveLength(2);
  });
});
