import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import Rating from '../index';
import reducer from '../../../redux/reducers';

const store = createStore(reducer);

const wrapper = mount(<Rating />);
expect(wrapper.find('.theme-color')).toHaveLength(1);

const wrapper2 = mount(
  <Provider store={store}>
    <Router>
      <Rating />
    </Router>
  </Provider>,
);

const spy = jest.spyOn(wrapper.instance(), 'show');
wrapper2.find('.theme-color').at(0).simulate('click');
expect(spy).toHaveBeenCalled();
