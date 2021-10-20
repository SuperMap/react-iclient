import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../../../WebMap';
import SmUniqueThemeLayer from '../UniqueThemeLayer';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
const data = [
  {
    geometry: {
      type: 'Point',
      coordinates: [122.36999999999999, 53.470000000000006]
    },
    properties: {
      省份: '黑龙江',
      海拔: '296'
    },
    type: 'Feature'
  }
];
const options = {
  style: {
    shadowBlur: 3,
    fillColor: '#FFFFFF'
  },
  isHoverAble: true,
  highlightStyle: {
    strokeColor: 'blue',
    fillColor: '#00F5FF',
    fillOpacity: 0.2
  },
  themeField: 'LANDTYPE',
  styleGroups: [
    {
      value: '沼泽',
      style: {
        fillColor: '#2F4F4F'
      }
    },
    {
      value: '缺省风格',
      style: {
        fillColor: '#ABABAB'
      }
    }
  ]
};
describe('SmUniqueThemeLayer', () => {
  mountTest(SmUniqueThemeLayer);
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
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmUniqueThemeLayer data={data} options={options} onLoad={onLoad}></SmUniqueThemeLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(onLoad).toBeCalled();
      done();
    });
  });

  it('update-data', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmUniqueThemeLayer data={data} options={options}></SmUniqueThemeLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      const newData =  [
          { geometry: { type: 'Point', coordinates: [0, 0] }, properties: { SmUserID: 'test' }, type: 'Feature' }
        ];
      wrapper.setProps({ children: <SmUniqueThemeLayer data={newData}></SmUniqueThemeLayer> });
      wrapper.update();
      const layerWrapper = wrapper.find(SmUniqueThemeLayer).get(0);
      expect(layerWrapper.props.data).not.toBe(null);
      expect(layerWrapper.props.data[0].properties.SmUserID).toBe('test');
      done();
    });
  });
});
