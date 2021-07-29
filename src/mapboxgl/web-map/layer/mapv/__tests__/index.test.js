import React from 'react';
import { mount } from 'enzyme';
import SmMapvLayer from '../MapvLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const options = {
  strokeStyle: 'rgba(53,57,255,0.5)',
  coordType: 'bd09mc',
  shadowColor: 'rgba(53,57,255,0.2)',
  shadowBlur: 3,
  lineWidth: 3.0,
  draw: 'simple'
};
const dataSet = {
  _subscribers: {},
  _options: {},
  _data: [
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [114.42635884541507, 30.332875117796107],
          [114.4246879789866, 30.33303018592148],
          [114.42302609571098, 30.33289837803057]
        ],
        _coordinates: [
          [601.6017170300596, 642.8932612979086],
          [600.6321814658523, 642.7890101619679],
          [599.6678584584353, 642.8776236275379]
        ]
      }
    }
  ],
  _dataCache: [
    {
      geometry: {
        type: 'LineString',
        coordinates: [
          [114.42635884541507, 30.332875117796107],
          [114.4246879789866, 30.33303018592148],
          [114.42302609571098, 30.33289837803057]
        ]
      }
    }
  ]
};
describe(`SmMapvLayer`, () => {
  mountTest(SmMapvLayer);
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
    wrapper = mount(<SmMapvLayer data={dataSet} options={options}></SmMapvLayer>);
    wrapper.update();
    expect(wrapper.props().data).not.toBe(null);
    expect(wrapper.props().options).not.toBe(null);
    done();
  });

  xit('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmMapvLayer data={dataSet} options={options}></SmMapvLayer>
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
