import React from 'react';
import { mount } from 'enzyme';
import WebMap from '../WebMap';

describe(`webmap`, () => {
    it(`webmap init`, () => {
      const wrapper = mount(<WebMap />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();  
    });
  });