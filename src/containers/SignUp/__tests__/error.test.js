import React from 'react';
import { shallow } from 'enzyme';
import Error from '../Errors';

it('should render Error component', () => {
  shallow(<Error errors={{ name: 'dummy' }} />);
});
