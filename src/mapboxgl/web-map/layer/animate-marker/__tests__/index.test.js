import React from 'react';
import { mount } from 'enzyme';
import SmAnimateMarkerLayer from '../AnimateMarkerLayer';
import SmWebMap from '../../../WebMap';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';

const features = {
  features: [
    {
      geometry: {
        type: 'Point',
        coordinates: [122.36999999999999, 53.470000000000006]
      },
      properties: {
        站台: '漠河',
        省份: '黑龙江',
        海拔: '296'
      },
      type: 'Feature'
    }
  ],
  type: 'FeatureCollection'
};
const colors = ["rab(255,155,20)", "#3AD900", "#0080d9"];
describe('AnimateMarkerLayer.vue', () => {
  mountTest(SmAnimateMarkerLayer);
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
    wrapper = mount(<SmAnimateMarkerLayer features={features} ></SmAnimateMarkerLayer>);
    wrapper.update();
    expect(wrapper.props().features.type).toBe('FeatureCollection');
    expect(wrapper.props().features.features.length).toBe(1);
    done();
  });

  it('no features', done => {
    wrapper = mount(<SmAnimateMarkerLayer></SmAnimateMarkerLayer>);
    wrapper.update();
    expect(wrapper.props().features).toBe(undefined);
    done();
  });

  it('wrapperWebMap', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features}></SmAnimateMarkerLayer>
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

  it('rotatingAperture', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} height={150} colors={colors} features={features} textField={'name'} type={'rotatingAperture'} ></SmAnimateMarkerLayer>
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

  it('haloRing', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} height={150} colors={colors} features={features} textField={'name'} type={'haloRing'} ></SmAnimateMarkerLayer>
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

  it('diffusedAperture', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} height={150} colors={colors} features={features} textField={'name'} type={'diffusedAperture'} ></SmAnimateMarkerLayer>
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

  it('rotatingTextBorder', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} height={150} colors={colors} features={features} textField={'name'} type={'rotatingTextBorder'} ></SmAnimateMarkerLayer>
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

  it('fluorescence', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer  width={150} height={150} colors={colors} features={features} textField={'name'} type={'fluorescence'} ></SmAnimateMarkerLayer>
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

  it('change props', done => {
    const newFeatures = {
      features: [
        {
          geometry: {
            type: 'Point',
            coordinates: [122.36999999999999, 53.470000000000006]
          },
          properties: {
            SmID: '1',
            SmX: '1.3622166088372886E7'
          },
          type: 'Feature'
        }
      ],
      type: 'FeatureCollection'
    };

    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} textField={'name'}></SmAnimateMarkerLayer>
      </SmWebMap>,
      {
        wrappingComponent: SmWebMap
      }
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmAnimateMarkerLayer features={newFeatures} type={'fluorescence'} width={500} height={500} textColor={'#fff'} textFontSize={18}></SmAnimateMarkerLayer> });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.features.type).toBe('FeatureCollection');
      expect(animateMarkerWrapper.props.features.features.length).toBe(1);
      done();
    });
  });
});