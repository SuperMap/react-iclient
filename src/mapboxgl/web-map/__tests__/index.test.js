import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';

describe(`SmWebMap`, () => {
  mountTest(SmWebMap);
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
  it('initial-serverUrl', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="test" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('test');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      done();
    });
  });

  it('getmapinfofailed', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onGetMapFailed = jest.fn();
    wrapper = mount(
      <SmWebMap
        serverUrl="https://fakeiportal.supermap.io/iportal"
        mapId="123"
        onGetMapFailed={onGetMapFailed}
      ></SmWebMap>
    );
    const instance = wrapper.instance();
    const viewModel = instance.viewModel;
    viewModel.on('getmapinfofailed', () => {
      expect(spy).not.toBeCalled();
      expect(onGetMapFailed).toBeCalled();
      done();
    });
  });

  it('getlayerdatasourcefailed', done => {
    const onGetLayerDatasourceFailed = jest.fn();
    wrapper = mount(
      <SmWebMap
        serverUrl="https://fakeiportal.supermap.io/iportal"
        mapId="wrong-layer"
        onGetLayerDatasourceFailed={onGetLayerDatasourceFailed}
      ></SmWebMap>
    );
    const instance = wrapper.instance();
    const viewModel = instance.viewModel;
    viewModel.on('getlayerdatasourcefailed', () => {
      expect(onGetLayerDatasourceFailed).toBeCalled();
      done();
    });
  });

  it('initial-mapObject', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
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
    wrapper = mount(<SmWebMap mapOptions={mapOptions}></SmWebMap>);
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapOptions.style.layers[0].id).toBe('simple-tiles');
      done();
    });
  });

  it('bindEvents', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onResize = jest.fn();
    const onRender = jest.fn();
    const onData = jest.fn();
    wrapper = mount(
      <SmWebMap
        serverUrl="https://fakeiportal.supermap.io/iportal"
        mapId="test"
        onData={onData}
        onRender={onRender}
        onResize={onResize}
      ></SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().onResize).not.toBe(null);
      expect(wrapper.props().onRender).not.toBe(null);
      done();
    });
  });

  it('setProps', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(<SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="test"></SmWebMap>);
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.setProps({
        mapId: 'test1',
        serverUrl: 'https://fakeiportal1.supermap.io/iportal',
        withCredentials: false,
        mapOptions: {
          zoom: 5,
          center: [0, 0],
          crs: '',
          maxBounds: [
            [0, 0],
            [180, 180]
          ],
          minZoom: 2,
          maxZoom: 18,
          renderWorldCopies: false,
          bearing: 0,
          pitch: 5,
          style: { diff: true, layers: [] }
        }
      });
      mapLoaded(wrapper, () => {
        expect(wrapper.props().mapId).toBe('test1');
        expect(wrapper.props().serverUrl).toBe('https://fakeiportal1.supermap.io/iportal');
        expect(wrapper.props().withCredentials).toBe(false);
        expect(wrapper.props().mapOptions.zoom).toBe(5);
        expect(wrapper.props().mapOptions.center[0]).toBe(0);
        expect(wrapper.props().mapOptions.center[1]).toBe(0);
        expect(wrapper.props().mapOptions.minZoom).toBe(2);
        expect(wrapper.props().mapOptions.maxZoom).toBe(18);
        expect(wrapper.props().mapOptions.renderWorldCopies).toBe(false);
        expect(wrapper.props().mapOptions.bearing).toBe(0);
        done();
      });
    });
  });
});
