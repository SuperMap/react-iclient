import React from 'react';
import { mount } from 'enzyme';
import SmHeatmapLayer from '../HeatmapLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
import HeatMapStyle from '../../../../_types/HeatMapStyle';
const layerStyle = new HeatMapStyle({
  'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.2,
    'rgb(103,169,207)',
    0.4,
    'rgb(209,229,240)',
    0.6,
    'rgb(253,219,199)',
    0.8,
    'rgb(239,138,98)',
    1,
    'rgb(178,24,43)'
  ],
  'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
  'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
});
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
describe(`SmHeatmapLayer`, () => {
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
    wrapper = mount(<SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer>);
    wrapper.update();
    expect(wrapper.props().data).not.toBe(null);
    expect(wrapper.props().layerStyle).not.toBe(null);
    done();
  });

  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      setTimeout(() => {
        expect(spy).toBeCalled();
        done();
      }, 2000);
    });
  });

  it('setData', done => {
    const newData = {
      type: 'FeatureCollection',
      features: []
    };
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmHeatmapLayer data={newData} layerStyle={layerStyle}></SmHeatmapLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer> });
      wrapper.update();
      const heatmapLayerWrapper = wrapper.find(SmHeatmapLayer).get(0);
      expect(heatmapLayerWrapper.props.data.type).toBe('FeatureCollection');
      expect(heatmapLayerWrapper.props.data.features.length).toBe(1);
      done();
    });
  });

  xit('setData-null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmHeatmapLayer data={null} layerStyle={layerStyle}></SmHeatmapLayer> });
      wrapper.update();
      const heatmapLayerWrapper = wrapper.find(SmHeatmapLayer).get(0);
      expect(heatmapLayerWrapper.props.data).toBe(null);
      done();
    });
  });

  it('setLayerStyle', done => {
    const newLayerStyle = new HeatMapStyle({
      'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
      'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0],
      'heatmap-radius': 1
    });
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmHeatmapLayer data={features} layerStyle={newLayerStyle}></SmHeatmapLayer> });
      wrapper.update();
      const heatmapLayerWrapper = wrapper.find(SmHeatmapLayer).get(0);
      expect(heatmapLayerWrapper.props.layerStyle.paint['heatmap-radius']).toBe(1);
      done();
    });
  });

  it('setLayerStyle-null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmHeatmapLayer data={features} layerStyle={layerStyle}></SmHeatmapLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmHeatmapLayer data={features} layerStyle={null}></SmHeatmapLayer> });
      wrapper.update();
      const heatmapLayerWrapper = wrapper.find(SmHeatmapLayer).get(0);
      expect(heatmapLayerWrapper.props.layerStyle).toBe(null);
      done();
    });
  });
});
