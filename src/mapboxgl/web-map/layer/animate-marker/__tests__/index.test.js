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
const colors = ['rab(255,155,20)', '#3AD900', '#0080d9'];

document.getElementsByClassName = () => {
  return [
    {
      style: { setProperty: jest.fn(), fontSize: '12px', color: '#f00' },
      innerHTML: '',
      children: [{ setAttribute: jest.fn() }, { setAttribute: jest.fn() }, { setAttribute: jest.fn() }]
    }
  ];
};
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
    wrapper = mount(<SmAnimateMarkerLayer features={features}></SmAnimateMarkerLayer>);
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
      </SmWebMap>
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
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingAperture'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
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
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'haloRing'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
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
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'diffusedAperture'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
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
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });

  it('change rotatingTextBorder height 300', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={150}
            height={300}
            colors={colors}
            features={features}
            textField={'name'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.height).toBe(300);
      done();
    });
  });
  it('change rotatingTextBorder height 0', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={150}
            height={0}
            colors={colors}
            features={features}
            textField={'name'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.height).toBe(0);
      done();
    });
  });

  it('change rotatingTextBorder width 0', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            colors={colors}
            features={features}
            textField={'name'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(0);
      done();
    });
  });

  it('change rotatingTextBorder textField 站台', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            colors={colors}
            features={features}
            textField={'站台'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textField).toBe('站台');
      done();
    });
  });

  it('change rotatingTextBorder textField 站台 features null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            colors={colors}
            features={null}
            textField={'站台'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textField).toBe('站台');
      done();
    });
  });
  it('change rotatingTextBorder textField 站台 features {}', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            colors={colors}
            features={{}}
            textField={'站台'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textField).toBe('站台');
      done();
    });
  });

  it('change rotatingTextBorder textColor', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            textColor={'#ff0'}
            features={features}
            textField={'name'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textColor).toBe('#ff0');
      done();
    });
  });

  it('change rotatingTextBorder textFontSize', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'rotatingTextBorder'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            width={0}
            height={150}
            textFontSize={'15px'}
            features={features}
            textField={'name'}
            type={'rotatingTextBorder'}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textFontSize).toBe('15px');
      done();
    });
  });
  it('fluorescence', done => {
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          textField={'name'}
          type={'fluorescence'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });

  it('change fluorescence width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} features={features} type={'fluorescence'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: <SmAnimateMarkerLayer features={features} type={'fluorescence'} width={600}></SmAnimateMarkerLayer>
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change fluorescence colors', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'fluorescence'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={features}
            type={'fluorescence'}
            colors={['#f00', '#f20']}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('#f00');
      done();
    });
  });

  it('change fluorescence textField name', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'fluorescence'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'fluorescence'} textField="name"></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textField).toBe('name');
      done();
    });
  });

  it('change fluorescence textField 站台', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'fluorescence'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'fluorescence'} textField="站台"></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.textField).toBe('站台');
      done();
    });
  });
  it('change rotatingTextBorder width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} features={features} type={'rotatingTextBorder'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'rotatingTextBorder'} width={600}></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change rotatingTextBorder colors', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'rotatingTextBorder'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={features}
            type={'rotatingTextBorder'}
            colors={['#f00', '#f20']}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('#f00');
      done();
    });
  });

  it('change rotatingAperture width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} features={features} type={'rotatingAperture'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'rotatingAperture'} width={600}></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change rotatingAperture colors', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'rotatingAperture'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={features}
            type={'rotatingAperture'}
            colors={['rgb(0,0,255)', '#f00', '#f20']}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('rgb(0,0,255)');
      done();
    });
  });

  it('change diffusedAperture width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} features={features} type={'diffusedAperture'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'diffusedAperture'} width={600}></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change diffusedAperture colors', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'diffusedAperture'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={features}
            type={'diffusedAperture'}
            colors={['#f00', '#f20']}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('#f00');
      done();
    });
  });
  it('change breathingAperture width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          type={'breathingAperture'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'breathingAperture'} width={600}></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change breathingAperture color', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer
          width={150}
          height={150}
          colors={colors}
          features={features}
          type={'breathingAperture'}
        ></SmAnimateMarkerLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={features}
            type={'breathingAperture'}
            width={150}
            height={150}
            colors={['#f00', '#ff0']}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('#f00');
      done();
    });
  });

  it('change haloRing width', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer width={150} features={features} type={'haloRing'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: <SmAnimateMarkerLayer features={features} type={'haloRing'} width={600}></SmAnimateMarkerLayer>
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.width).toBe(600);
      done();
    });
  });

  it('change haloRing colors', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmAnimateMarkerLayer features={features} type={'haloRing'}></SmAnimateMarkerLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer features={features} type={'haloRing'} colors={['#f00', '#f20']}></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.colors[0]).toBe('#f00');
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
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmAnimateMarkerLayer
            features={newFeatures}
            type={'fluorescence'}
            width={500}
            height={500}
            textColor={'#fff'}
            textFontSize={18}
          ></SmAnimateMarkerLayer>
        )
      });
      wrapper.update();
      const animateMarkerWrapper = wrapper.find(SmAnimateMarkerLayer).get(0);
      expect(animateMarkerWrapper.props.features.type).toBe('FeatureCollection');
      expect(animateMarkerWrapper.props.features.features.length).toBe(1);
      done();
    });
  });
});
