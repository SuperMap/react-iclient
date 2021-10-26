import React from 'react';
import { mount } from 'enzyme';
import SmMap, { MapProps } from '../Map';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';

describe(`SmMap`, () => {
  mountTest(SmMap);
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
  const mapProps: MapProps = {
    target: 'mapDomId',
    mapOptions: {
      zoom: 5,
      center: [0, 0],
      crs: 'EPSG:4326',
      maxBounds: [
        [0, 0],
        [180, 180]
      ],
      minZoom: 2,
      maxZoom: 18
    },
    sprites: {},
    glyphs: {},
    tiandituKey: {},
  };
  it('init Map', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmMap {...mapProps} ></SmMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().target).toBe('mapDomId');
      expect(wrapper.props().mapOptions.zoom).toBe(5);
      expect(wrapper.props().mapOptions.crs).toBe('EPSG:4326');
      expect(wrapper.props().mapOptions.center[0]).toBe(0);
      expect(wrapper.props().mapOptions.center[1]).toBe(0);
      expect(wrapper.props().mapOptions.minZoom).toBe(2);
      expect(wrapper.props().mapOptions.maxZoom).toBe(18);
      done();
    });
  });


  // setProps 数据准备
  const renderLayers = () => {
    class Layer extends React.Component {
      static displayName = 'mapGetter(Layer)'
      render() {
        return null;
      }
    }
    const layers = [{ id: 'LayerId1' }, { id: 'LayerId2' }]
    return layers.map(layer => <Layer key={layer.id} layerId={layer.id} />);
  }


  it('bindEvents', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const onResize = jest.fn();
    const onRender = jest.fn();
    const onLoad = jest.fn();
    wrapper = mount(<SmMap
      sprites={{}}
      glyphs={{}}
      onLoad={onLoad}
      onRender={onRender}
      onResize={onResize} target="test"></SmMap>);
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().onResize).not.toBe(null);
      expect(wrapper.props().onRender).not.toBe(null);
      expect(wrapper.props().onLoad).not.toBe(null);
      done();
    });
  });

  it('setProps', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(<SmMap sprites={{}} glyphs={{}} target="test"></SmMap>);
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      const children = renderLayers()
      const newProps = {
        children,
        target: 'mapDomId',
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
          bearing: 1
        },
        sprites: { 'ChinaDark': 'http://support.supermap.com.cn:8090/iserver/services/map-china400/restjsr/v1/vectortile/maps/ChinaDark/sprites/sprite' },
        glyphs: { 'ChinaDark': 'http://support.supermap.com.cn:8090/iserver/services/map-china400/restjsr/v1/vectortile/maps/ChinaDark/fonts/{fontstack}/{range}' },
        tiandituKey: {},
      };
      wrapper.setProps(newProps);
      // mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().target).toBe('mapDomId');
      expect(wrapper.props().mapOptions.zoom).toBe(5);
      expect(wrapper.props().mapOptions.crs).toBe('EPSG:4326');
      expect(wrapper.props().mapOptions.center[0]).toBe(0);
      expect(wrapper.props().mapOptions.center[1]).toBe(0);
      expect(wrapper.props().mapOptions.minZoom).toBe(2);
      expect(wrapper.props().mapOptions.maxZoom).toBe(18);
      expect(wrapper.props().children.length).toBe(2);
      done();
      // });
    });
  });

});
