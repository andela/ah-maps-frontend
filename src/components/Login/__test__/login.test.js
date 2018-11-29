/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../index';
import GridExampleCelledInternally from '../../LandingPage';

it('renders without crashing', () => {
  shallow(<Login />);
});

it('contains a h1 element', ()=>{
  const wrapper = shallow(<Login />);
  const header = <h1 className="ui header">Log in</h1>;
  expect(wrapper.contains(header)).toEqual(true);
  
});
