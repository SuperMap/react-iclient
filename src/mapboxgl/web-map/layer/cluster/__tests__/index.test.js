import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../../../WebMap';
import SmClusterLayer from '../ClusterLayer';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
import CircleStyle from '../../../../_types/CircleStyle';

const clusteredPointStyle = new CircleStyle({
  'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
  'circle-radius': ['step', ['get', 'point_count'], 10, 80, 20, 600, 50]
});

const unclusteredPointStyle = new CircleStyle({
  'circle-color': '#11b4da',
  'circle-stroke-width': 1,
  'circle-stroke-color': '#fff'
});

let data = {
  type: 'FeatureCollection',
  features: [
    {
      geometry: {
        type: 'Point',
        coordinates: [122.36999999999999, 53.470000000000006]
      },
      properties: {
        区站号: '50136',
        站台: '漠河'
      },
      type: 'Feature'
    }
  ]
};
describe('ClusterLayer.vue', () => {
  mountTest(SmClusterLayer);
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
    wrapper = mount(<SmClusterLayer data={data}></SmClusterLayer>);
    wrapper.update();
    expect(wrapper.props().data.type).toBe('FeatureCollection');
    expect(wrapper.props().data.features.length).toBe(1);
    done();
  });

  xit('wrap map click', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, e => {
      // const spy = jest.spyOn(e.map, 'click');
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      wrapper.find('#map').simulate('click');
      wrapper.update();
      expect(clusterWrapper.props.data.type).toBe('FeatureCollection');
      // expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('setData', done => {
    let newData = {
      type: 'FeatureCollection',
      features: [
        {
          geometry: {
            type: 'Point',
            coordinates: [122, 53]
          },
          properties: {
            SmID: '1'
          },
          type: 'Feature'
        }
      ]
    };

    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmClusterLayer
            data={newData}
            clusteredPointStyle={clusteredPointStyle}
            unclusteredPointStyle={unclusteredPointStyle}
          ></SmClusterLayer>
        )
      });
      wrapper.update();
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      expect(clusterWrapper.props.data.type).toBe('FeatureCollection');
      expect(clusterWrapper.props.data.features.length).toBe(1);
      done();
    });
  });

  it('setData null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmClusterLayer
            data={null}
            clusteredPointStyle={clusteredPointStyle}
            unclusteredPointStyle={unclusteredPointStyle}
          ></SmClusterLayer>
        )
      });
      wrapper.update();
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      expect(clusterWrapper.props.data).toBe(null);
      done();
    });
  });

  it('setUnclusteredPointStyle unclusteredPointStyle null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: (
          <SmClusterLayer
            data={data}
            clusteredPointStyle={clusteredPointStyle}
            unclusteredPointStyle={null}
          ></SmClusterLayer>
        )
      });
      wrapper.update();
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      expect(clusterWrapper.props.unclusteredPointStyle).toBe(null);
      done();
    });
  });
  it('setClusteredPointTextLayout', done => {
    const clusteredPointTextLayout = {};
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({
        children: <SmClusterLayer data={data} clusteredPointTextLayout={clusteredPointTextLayout}></SmClusterLayer>
      });
      wrapper.update();
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      expect(clusterWrapper.props.clusteredPointTextLayout).not.toBeNull();
      done();
    });
  });

  it('setClusteredPointTextLayout null', done => {
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmClusterLayer data={data}></SmClusterLayer>
      </SmWebMap>
    );

    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmClusterLayer data={data} clusteredPointTextLayout={null}></SmClusterLayer> });
      wrapper.update();
      const clusterWrapper = wrapper.find(SmClusterLayer).get(0);
      expect(clusterWrapper.props.clusteredPointTextLayout).toBeNull();
      done();
    });
  });
});
