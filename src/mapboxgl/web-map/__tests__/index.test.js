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
      <SmWebMap
        serverUrl="https://fakeiportal.supermap.io/iportal"
        mapId="test"
        accessToken="545454455465656"
        onLoad={onLoad}
      ></SmWebMap>
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
          crs: 'EPSG:4326',
          maxBounds: [
            [0, 0],
            [180, 180]
          ],
          minZoom: 2,
          maxZoom: 18,
          renderWorldCopies: true,
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
        expect(wrapper.props().mapOptions.renderWorldCopies).toBe(true);
        expect(wrapper.props().mapOptions.bearing).toBe(0);
        done();
      });
    });
  });

  it('initial-markerLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="123456" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      setTimeout(() => {
        expect(spy).toBeCalled();
        expect(wrapper.props().mapId).toBe('123456');
        expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
        const layers = Object.values(e.map.overlayLayersManager);
        expect(layers.length).toBe(2);
        const markerLayer = layers[1];
        expect(markerLayer.type).toBe('symbol');
        expect(markerLayer.layout['icon-image']).toBe(
          'http://fakeiportal/iportal/apps/dataviz/static/imgs/markers/ktv_red.png'
        );
        done();
      }, 1000);
    });
  });

  it('initial-heatLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="12345678" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('12345678');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(2);
      const heatLayer = layers[1];
      expect(heatLayer.type).toBe('heatmap');
      expect(heatLayer.paint['heatmap-radius']).toBe(25);
      done();
    });
  });

  it('initial-vectorLayer-point', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="147258369" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('147258369');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(2);
      const vectorLayerPoint = layers[1];
      expect(vectorLayerPoint.type).toBe('circle');
      expect(vectorLayerPoint.paint['circle-radius']).toBe(6);
      done();
    });
  });
  it('initial-vectorLayer-line', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="159357852" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('159357852');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(2);
      const vectorLayerLine = layers[1];
      expect(vectorLayerLine.type).toBe('line');
      expect(vectorLayerLine.paint['line-width']).toBe(7);
      done();
    });
  });

  it('initial-ranksymbolLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="123456789" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('123456789');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(3);
      const vectorLayerPoint = layers[1];
      expect(vectorLayerPoint.type).toBe('circle');
      expect(vectorLayerPoint.paint['circle-radius'].length).toBeGreaterThan(0);
      const labelLayer = layers[2];
      expect(labelLayer.type).toBe('symbol');
      expect(labelLayer.paint['text-color']).toBe('#333');
      expect(labelLayer.layout['text-field']).toBe('{机场}');
      done();
    });
  });

  it('initial-uniqueLayer-polygon', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="2064629293" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('2064629293');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(3);
      const vectorLayerPoint = layers[1];
      const id = vectorLayerPoint.id;
      expect(vectorLayerPoint.type).toBe('fill');
      expect(vectorLayerPoint.paint['fill-color'].length).toBeGreaterThan(0);
      const strokeLayer = layers[2];
      expect(strokeLayer.id).toBe(`${id}-strokeLine`);
      expect(strokeLayer.type).toBe('line');
      expect(strokeLayer.paint['line-color']).toBe('#ffffff');
      done();
    });
  });

  it('initial-rangeLayer-point', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="4784854858" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('4784854858');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(2);
      const rangeLayerPoint = layers[1];
      const id = rangeLayerPoint.id;
      expect(id).toBe('RANGE-北京市轨道交通站点(9)-0');
      expect(rangeLayerPoint.type).toBe('circle');
      expect(rangeLayerPoint.paint['circle-radius']).toBe(8);
      expect(rangeLayerPoint.paint['circle-color'].length).toBeGreaterThan(0);
      done();
    });
  });

  it('initial-tiandituLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="1224625555" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('1224625555');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(2);
      const tiandituLayer = layers[0];
      expect(tiandituLayer.id).toBe('tianditu-layers-TIANDITU_TER_3857');
      expect(tiandituLayer.type).toBe('raster');
      const labelLayer = layers[1];
      expect(labelLayer.id).toBe('tianditu-label-layers-TIANDITU_TER_3857');
      done();
    });
  });

  it('initial-wmsLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="4845656956" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('4845656956');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      done();
    });
  });

  it('initial-wmtsLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="1016996969" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('1016996969');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      // const layers = Object.values(e.map.overlayLayersManager);
      // expect(layers.length).toBe(3);
      // const vectorLayerPoint = layers[1];
      // const id = vectorLayerPoint.id;
      // expect(vectorLayerPoint.type).toBe('fill');
      // expect(vectorLayerPoint.paint['fill-color'].length).toBeGreaterThan(0);
      // const strokeLayer = layers[2];
      // expect(strokeLayer.id).toBe(`${id}-strokeLine`);
      // expect(strokeLayer.type).toBe('line');
      // expect(strokeLayer.paint['line-color']).toBe('#ffffff');
      done();
    });
  });

  it('initial-xyzLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="7894565555" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('7894565555');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      expect(layers.length).toBe(1);
      const xyzLayer = layers[0];
      expect(xyzLayer.id).toBe('XYZ-layers-OpenStreetMap');
      expect(xyzLayer.type).toBe('raster');
      done();
    });
  });

  it('initial-migrationLayer', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onLoad = jest.fn();
    wrapper = mount(
      <SmWebMap serverUrl="https://fakeiportal.supermap.io/iportal" mapId="6177878786" onLoad={onLoad}></SmWebMap>
    );
    mapLoaded(wrapper, e => {
      expect(spy).toBeCalled();
      expect(wrapper.props().mapId).toBe('6177878786');
      expect(wrapper.props().serverUrl).toBe('https://fakeiportal.supermap.io/iportal');
      const layers = Object.values(e.map.overlayLayersManager);
      done();
    });
  });
});
