import React from 'react';
import { shallow } from 'enzyme';
import Error from '../../../components/Signup/Message';

it('should render Error component', () => {
  shallow(<Error errors={{ name: 'dummy' }} />);
});
