import React from 'react';
import { mount } from 'enzyme';
import MobileOperator from './MobileOperator';
import { BrowserRouter as Router } from "react-router-dom";
import toJSON from 'enzyme-to-json'

it('renders without crashing', () => {
  const comp = mount(
  <Router>
    <MobileOperator name="mts" title="МТС" />
  </Router>);

  expect(comp.find('p').at(0).text()).toEqual('МТС')
  
  expect(toJSON(comp)).toMatchSnapshot();
}); 