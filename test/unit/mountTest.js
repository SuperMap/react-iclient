import React from 'react';
import { mount } from 'enzyme';

export default function mountTest(Component) {
  describe(`mount and unmount`, () => {
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(<Component />);
      expect(() => {
        wrapper.setProps({});
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}

export function mapLoaded(wrapper, callback) {
  const instance = wrapper.instance();
  const viewModel = instance.viewModel;
  viewModel.on('addlayerssucceeded', callback);
}
