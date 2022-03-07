import React from 'react';
import { mount } from 'enzyme';
import SmRangeThemeLayer from '../RangeThemeLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const features = [
  {
    stringID: null,
    fieldNames: ['POP_DENSITY99'],
    geometry: {
      center: {
        x: 116.59932579818317,
        y: 40.634491649885234
      },
      parts: [1],
      style: null,
      prjCoordSys: null,
      id: 1,
      type: 'REGION',
      partTopo: [1],
      points: [
        {
          x: 116.65601002454922,
          y: 41.03663585095796
        },

        {
          x: 116.65601002454922,
          y: 41.04663585095796
        },
        {
          x: 116.65601002454922,
          y: 41.0563585095796
        },
        {
          x: 116.65601002454922,
          y: 41.03663585095796
        }
      ]
    },
    fieldValues: ['25.8'],
    ID: 1
  }
];
const themeOptions = {
  opacity: 0.8,
  style: {
    shadowBlur: 16,
    shadowColor: '#000000',
    fillColor: '#FFFFFF'
  },
  isHoverAble: true,
  highlightStyle: {
    stroke: true,
    strokeWidth: 4
  },
  themeField: 'POP_DENSITY99',
  styleGroups: [
    {
      start: 0,
      end: 0.02,
      style: {
        color: '#FDE2CA'
      }
    }
  ]
};
describe(`SmRangeThemeLayer`, () => {
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
    wrapper = mount(<SmRangeThemeLayer options={themeOptions} data={features}></SmRangeThemeLayer>);
    wrapper.update();
    expect(wrapper.props().data.length).toBe(1);
    expect(wrapper.props().options).not.toBe(null);
    done();
  });

  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRangeThemeLayer options={themeOptions} data={features}></SmRangeThemeLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });

  it('setData', done => {
    const newData = [];
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRangeThemeLayer options={themeOptions} data={features}></SmRangeThemeLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmRangeThemeLayer options={themeOptions} data={newData}></SmRangeThemeLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmRangeThemeLayer).get(0);
      expect(geoJsonWrapper.props.data.length).toBe(0);
      done();
    });
  });

  xit('setData-null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRangeThemeLayer options={themeOptions} data={features}></SmRangeThemeLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmRangeThemeLayer data={null} options={themeOptions}></SmRangeThemeLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmRangeThemeLayer).get(0);
      expect(geoJsonWrapper.props.data).toBe(null);
      done();
    });
  });
});
