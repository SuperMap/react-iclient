import React from 'react';
import { mount } from 'enzyme';
import SmGeojsonLayer from '../GeojsonLayer';
import SmWebMap from '../../../WebMap';
import CircleStyle from '../../../../_types/CircleStyle';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';

const mapOptions = {
  container: 'map', // container id
  style: {
    version: 8,
    sources: {
      'raster-tiles': {
        attribution: 'attribution',
        type: 'raster',
        tiles: [
          'https://fakeiserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
        ],
        tileSize: 256
      }
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 0,
        maxzoom: 22
      }
    ]
  },
  center: [120.143, 30.236],
  zoom: 3
};
const data = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        type: 'Point',
        coordinates: [122.36999999999999, 53.470000000000006]
      },
      properties: {
        SmID: '1'
      },
      type: 'Feature'
    }
  ]
};

describe(`SmGeojsonLayer`, () => {
  mountTest(SmGeojsonLayer);
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
    const layerStyle = new CircleStyle();
    wrapper = mount(<SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>);
    wrapper.update();
    expect(wrapper.props().data.type).toBe('FeatureCollection');
    expect(wrapper.props().data.features.length).toBe(1);
    expect(wrapper.props().layerStyle.paint).not.toBe(null);
    done();
  });

  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const layerStyle = new CircleStyle();
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>
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

  it('setData', done => {
    const layerStyle = new CircleStyle();
    const newData = {
      type: 'FeatureCollection',
      features: []
    };
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmGeojsonLayer data={newData} layerStyle={layerStyle}></SmGeojsonLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmGeojsonLayer).get(0);
      expect(geoJsonWrapper.props.data.type).toBe('FeatureCollection');
      expect(geoJsonWrapper.props.data.features.length).toBe(0);
      done();
    });
  });

  it('setData-null', done => {
    const layerStyle = new CircleStyle();
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmGeojsonLayer data={null} layerStyle={layerStyle}></SmGeojsonLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmGeojsonLayer).get(0);
      expect(geoJsonWrapper.props.data).toBe(null);
      done();
    });
  });

  it('setLayerStyle', done => {
    const layerStyle = new CircleStyle();
    const newLayerStyle = new CircleStyle({ 'circle-color': 'red' });
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmGeojsonLayer data={data} layerStyle={newLayerStyle}></SmGeojsonLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmGeojsonLayer).get(0);
      expect(geoJsonWrapper.props.layerStyle.paint).not.toBe(null);
      expect(geoJsonWrapper.props.layerStyle.paint['circle-color']).toBe('red');
      done();
    });
  });

  it('setLayerStyle-null', done => {
    const layerStyle = new CircleStyle();
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmGeojsonLayer data={data} layerStyle={layerStyle}></SmGeojsonLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmGeojsonLayer data={data} layerStyle={null}></SmGeojsonLayer> });
      wrapper.update();
      const geoJsonWrapper = wrapper.find(SmGeojsonLayer).get(0);
      expect(geoJsonWrapper.props.layerStyle).toBe(null);
      done();
    });
  });
});