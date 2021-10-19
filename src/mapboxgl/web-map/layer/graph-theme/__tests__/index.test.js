import React from 'react';
import { mount } from 'enzyme';
import SmGraphThemeLayer from '../GraphThemeLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const data = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        type: 'Point',
        coordinates: [122.36999999999999, 53.470000000000006]
      },
      properties: {
        SmID: '1',
        SmX: '1.3622166088372886E7',
        SmY: '7070412.841759119',
        SmLibTileID: '1',
        SmUserID: '0'
      },
      type: 'Feature'
    }
  ]
};
describe('SmGraphThemeLayer', () => {
  mountTest(SmGraphThemeLayer);
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

  it('initial', (done) => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGraphThemeLayer chartsType={'Pie'} data={data}></SmGraphThemeLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      const graphThemeWrapper = wrapper.find(SmGraphThemeLayer).get(0);
      expect(graphThemeWrapper.props.data.type).toBe('FeatureCollection');
      expect(graphThemeWrapper.props.data.features.length).toBe(1);
      done();
    });
  });
});
