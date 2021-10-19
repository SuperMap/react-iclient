import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../../../WebMap';
import SmRasterTileLayer from '../RasterTileLayer';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
describe('SmRasterTileLayer', () => {
  mountTest(SmRasterTileLayer);
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('render', (done) => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRasterTileLayer mapUrl={'www.fakeurl.com/PopulationDistribution'} opacity={0.8} visible={true} layerId={'myRasterLayer'}></SmRasterTileLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });
});
