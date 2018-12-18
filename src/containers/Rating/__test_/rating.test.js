import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Rating from '../index';
import { store } from '../../../redux/store';


describe('<Rating />', () => {
  it('renders Rating component without crashing', () => {
    shallow(
      <Provider store={store}>
        <Router>
          <Rating />
        </Router>
      </Provider>,
    );
  });
});
