import React from 'react';
import {shallow} from 'enzyme';
import Rating from '../index';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';



describe('<Rating />', () => {
  it('renders Rating component without crashing', () => {
    shallow(<Provider store={store}>
      <Router>
        <Rating />
      </Router>
    </Provider>,)
  });
});
