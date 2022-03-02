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


  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRasterTileLayer
          mapUrl={'www.fakeurl.com/PopulationDistribution'}
          opacity={0.8}
          visible={true}
        ></SmRasterTileLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      setTimeout(() => {
        expect(spy).toBeCalled();
        done();
      }, 3000);
    });
  });

  it('wrapperWebMap no mapUrl', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRasterTileLayer opacity={0.8} visible={true}></SmRasterTileLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      setTimeout(() => {
        expect(spy).toBeCalled();
        expect(wrapper.props.mapUrl).toBe(undefined);
        done();
      }, 3000);
    });
  });
});
