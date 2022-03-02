import React from 'react';
import { mount } from 'enzyme';
import SmLabelThemeLayer from '../LabelThemeLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const features = [
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
      SmUserID: '0',
      SmGeometrySize: '16',
      最高气温_Num: '33.0',
      最高七天气温_Num: '29.0',
      平均最低气温_Num: '-47.0',
      海波_Num: '296.0'
    },
    type: 'Feature'
  }
];
describe('SmLabelThemeLayer', () => {
  mountTest(SmLabelThemeLayer);
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
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmLabelThemeLayer data={features} layerName={'LabelThemeLayer'}></SmLabelThemeLayer>
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
