import React from 'react';
import { shallow, mount } from 'enzyme';
import MobileOperator from './MobileOperator';

it('renders without crashing', () => {
  const comp = shallow(<MobileOperator name="mts" title="МТС" />);
});