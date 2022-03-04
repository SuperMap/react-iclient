import React from 'react';
import { mount } from 'enzyme';
import SmWebMap from '../../../WebMap';
import SmRanksymbolThemeLayer from '../RanksymbolThemeLayer';
import mapboxgl from '@libs/mapboxgl/mapbox-gl-enhance.js';
import mountTest, { mapLoaded } from '@test/unit/mountTest';
import { mapOptions } from '@test/unit/mocks/services';
const data = [
  {
    geometry: {
      type: 'Point',
      coordinates: [122.36999999999999, 53.470000000000006]
    },
    properties: {
      SmID: '1',
      SmX: '1.3622166088372886E7',
      SmY: '7070412.841759119',
      SmLibTileID: '1',
      SmUserID: '0',
      SmGeometrySize: '16',
      区站号: '50136',
      站台: '漠河',
      省份: '黑龙江',
      海拔: '296'
    },
    type: 'Feature'
  }
];

const options = {
  attributions: '',
  themeField: 'CON2009',
  symbolSetting: {
    circleStyle: { fillOpacity: 0.8 },
    fillColor: '#FFA500',
    circleHoverStyle: { fillOpacity: 1 }
  }
};
describe('SmRanksymbolThemeLayer', () => {
  mountTest(SmRanksymbolThemeLayer);
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
    const spy = jest.spyOn(mapboxgl, 'Map');
    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRanksymbolThemeLayer options={options} symbolType={'circle'}  data={data} ></SmRanksymbolThemeLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      expect(spy).toBeCalled();
      done();
    });
  });

  it('change props', done => {
    let newData = [
      {
        geometry: {
          type: 'Point',
          coordinates: [122.36999999999999, 53.470000000000006]
        },
        properties: {
          SmID: '1',
          SmX: '1.3622166088372886E7',
          SmY: '7070412.841759119',
          SmLibTileID: '1'
        },
        type: 'Feature'
      }
    ];

    let newOptions = {
      themeField: 'CON2009',
      symbolSetting: {
        circleStyle: { fillOpacity: 1 },
        fillColor: '#FFA500',
        circleHoverStyle: { fillOpacity: 0.5 }
      }
    }

    wrapper = mount(
      <SmWebMap mapOptions={mapOptions}>
        <SmRanksymbolThemeLayer options={options} symbolType={'circle'}  data={data} ></SmRanksymbolThemeLayer>
      </SmWebMap>
    );
    mapLoaded(wrapper, () => {
      wrapper.setProps({ children: <SmRanksymbolThemeLayer data={newData} options={newOptions}></SmRanksymbolThemeLayer> });
      wrapper.update();
      const ranksymbolWrapper = wrapper.find(SmRanksymbolThemeLayer).get(0);
      expect(ranksymbolWrapper.props.data[0].type).toBe('Feature');
      expect(ranksymbolWrapper.props.data.length).toBe(1);
      done();
    });
  });
});
