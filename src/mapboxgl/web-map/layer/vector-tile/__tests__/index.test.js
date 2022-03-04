import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../../../WebMap';
import SmVectorTileLayer from '../VectorTileLayer';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const styleOptions = 'https://fakeiportal.supermap.io/vectorstyles.json';

describe('SmVectorTileLayer', () => {
  mountTest(SmVectorTileLayer);
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

  it('initial', done => {
    wrapper = mount(<SmVectorTileLayer styleOptions={styleOptions}></SmVectorTileLayer>);
    wrapper.update();
    expect(wrapper.props().styleOptions).toBe(styleOptions);
    done();
  });

  it('change styleOptions', done => {
    const newStyleOptions = 'https://fakeiportal.supermap.io/newvectorstyles.json';
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmVectorTileLayer styleOptions={styleOptions}></SmVectorTileLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmVectorTileLayer styleOptions={newStyleOptions}></SmVectorTileLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmVectorTileLayer).get(0);
      expect(geoJsonWrapper.props.styleOptions).toBe(newStyleOptions);
      done();
    });
  });
});
