import React from 'react';
import { mount } from 'enzyme';
import SmFireLayer from '../FireLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const features = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        coordinates: [115.78, 39.91],
        type: 'Point'
      },
      properties: {
        value: 0.06,
        id: 0
      },
      type: 'Feature'
    }
  ]
};
describe(`SmFireLayer`, () => {
  mountTest(SmFireLayer);
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
    wrapper = mount(<SmFireLayer features={features} modelScale={5.41843220338983e-6}></SmFireLayer>);
    wrapper.update();
    expect(wrapper.props().features).not.toBe(null);
    expect(wrapper.props().modelScale).not.toBe(null);
    done();
  });

  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmFireLayer features={features} modelScale={5.41843220338983e-6}></SmFireLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });

  it('setData', done => {
    const newData = {
      type: 'FeatureCollection',
      features: [
        {
          geometry: {
            coordinates: [115.78, 39.91],
            type: 'Point'
          },
          properties: {
            value: 0.06,
            id: 0
          },
          type: 'Feature'
        },
        {
          geometry: {
            coordinates: [115.78, 38],
            type: 'Point'
          },
          properties: {
            value: 0.06,
            id: 0
          },
          type: 'Feature'
        }
      ]
    };
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmFireLayer features={features} modelScale={5.41843220338983e-6}></SmFireLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmFireLayer features={newData} modelScale={5.41843220338983e-6}></SmFireLayer> });
      wrapper.update();
      const layerWrapper = wrapper.find(SmFireLayer).get(0);
      expect(layerWrapper.props.features.type).toBe('FeatureCollection');
      expect(layerWrapper.props.features.features.length).toBe(2);
      done();
    });
  });

  xit('setData-null', done => {
    const newFeatures = { type: '', features: [] };
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmFireLayer features={features} modelScale={5.41843220338983e-6}></SmFireLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: <SmFireLayer features={newFeatures} modelScale={5.41843220338983e-6}></SmFireLayer>
      });
      wrapper.update();
      const layerWrapper = wrapper.find(SmFireLayer).get(0);
      expect(layerWrapper.props.features.features.length).toBe(0);
      done();
    });
  });

  it('setModelScale', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmFireLayer features={features} modelScale={5.41843220338983e-6}></SmFireLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmFireLayer features={features} modelScale={0}></SmFireLayer> });
      wrapper.update();
      const layerWrapper = wrapper.find(SmFireLayer).get(0);
      expect(layerWrapper.props.modelScale).toBe(0);
      done();
    });
  });
});
