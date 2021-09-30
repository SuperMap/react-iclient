import React from 'react';
import { mount } from 'enzyme';
import SmDataFlowLayer from '../DataFlowLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
import CircleStyle from '../../../../_types/CircleStyle';
import LineStyle from '../../../../_types/LineStyle';
import FillStyle from '../../../../_types/FillStyle';

const layerStyle = { symbol: {}, circle: new CircleStyle(), line: new LineStyle(), fill: new FillStyle() };
const serviceUrl = '/iserver/services/dataflowTest/dataflow';
describe(`SmDataFlowLayer`, () => {
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
    const registerToken = '123';
    wrapper = mount(
      <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle} registerToken={registerToken}></SmDataFlowLayer>
    );
    wrapper.update();
    expect(wrapper.props().serviceUrl).toBe('/iserver/services/dataflowTest/dataflow');
    expect(wrapper.props().layerStyle).not.toBe(null);
    expect(wrapper.props().registerToken).toBe(registerToken);
    done();
  });

  it('wrapperWebMap-Point', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/Point';
    const registerToken = '123';

    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer
          serviceUrl={serviceUrl}
          layerStyle={layerStyle}
          registerToken={registerToken}
        ></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });

  it('wrapperWebMap-LineString', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/LineString';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      expect(wrapper.props().layerStyle).not.toBe(null);
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });
  it('wrapperWebMap-MultiLineString', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/MultiLineString';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });
  it('wrapperWebMap-Line', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/Line';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });
  it('wrapperWebMap-Polygon', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/Polygon';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });
  it('wrapperWebMap-MultiPolygon', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/MultiPolygon';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.serviceUrl).toBe(serviceUrl);
      done();
    });
  });
  it('wrapperWebMap-source', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/Point';
    const layerId = 'dataflowlayer-source';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle} layerId={layerId}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.layerId).toBe(layerId);
      done();
    });
  });
  it('wrapperWebMap-source-has-false', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    const serviceUrl = '/dataflow/Point';
    const layerId = 'dataflowlayer-source-has-false';
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle} layerId={layerId}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      expect(layerWrapper.props.layerId).toBe(layerId);
      done();
    });
  });

  xit('setLayerStyle', done => {
    const serviceUrl = '/dataflow/Point';
    const newStyle = { circle: { color: 'red' }, line: {}, fill: {} };
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={layerStyle}></SmDataFlowLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmDataFlowLayer serviceUrl={serviceUrl} layerStyle={newStyle}></SmDataFlowLayer> });
      wrapper.update();
      const layerWrapper = wrapper.find(SmDataFlowLayer).get(0);
      const viewModel = layerWrapper.viewModel;
      done();
    });
  });
});
