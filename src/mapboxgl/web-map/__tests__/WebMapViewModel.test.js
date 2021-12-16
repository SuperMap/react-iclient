import WebMapViewModel from '../WebMapViewModel';
import mockFetch from '@test/unit/mocks/FetchRequest';
import mockMapInfo from '@test/unit/mocks/data/common-map-info.json';
import mockiPortalServiceProxy from '@test/unit/mocks/data/iportal-service-proxy.json';
import mockData from '@test/unit/mocks/data/data-minhang.js';
import mockCsvGeojson from '@test/unit/mocks/data/csv-geojson.json';
import flushPromises from 'flush-promises';

const fetchResource = {
  'https://fakeiportal.supermap.io/iportal/web/config/portal.json': mockiPortalServiceProxy,
  'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mockMapInfo,
  'https://fakeiportal.supermap.io/iportal/web/datas/1960447494/content.json': mockData,
  'https://fakeiportal.supermap.io/iportal/web/datas/676516522/content.json': mockData,
  'https://fakeiportal.supermap.io/iportal/web/datas/676516522/content.json?pageSize=9999999&currentPage=1': mockData
};
const mockMapId = 123;
const mockWebMapOptions = {
  accessKey: undefined,
  accessToken: undefined,
  excludePortalProxyUrl: undefined,
  iportalServiceProxyUrlPrefix: undefined,
  isSuperMapOnline: undefined,
  proxy: undefined,
  serverUrl: 'https://fakeiportal.supermap.io/iportal',
  target: 'map',
  tiandituKey: undefined,
  withCredentials: false
};
const mockMapOptions = {
  container: 'map',
  style: {
    version: 8,
    sources: {
      'raster-tiles': {
        type: 'raster',
        tiles: ['https://test'],
        tileSize: 256
      }
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 5,
        maxzoom: 20
      }
    ]
  },
  center: [120.143, 30.236],
  zoom: 3,
  bounds: {
    getEast: () => 2,
    getWest: () => -1,
    getSouth: () => 2,
    getNorth: () => -1
  }
};
const callback = jest.fn();

describe(`WebMapViewModel`, () => {
  beforeEach(() => {});

  afterEach(() => {});
  it('add DATAFLOW_POINT_TRACKLayer', async done => {
    mockFetch(fetchResource);
    const mapOption = undefined;
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mapOption);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add DATAFLOW_POINT_TRACKLayer with style is IMAGE_POINT', async done => {
    const mockUrl = 'https://fakeiportal.supermap.io/iportal/mock-dataflow-info';
    const mockDataflow = {
      urls: [{ url: 'https://fakeiportal.supermap.io/iportal/wsUrl/iserver/services/test/dataflow' }],
      featureMetaData: {
        featureType: 'test',
        fieldInfos: [
          { name: 'test', type: 'TEXT' },
          { name: 'test1', type: 'DOUBLE' },
          { name: 'test2', type: 'other' }
        ]
      }
    };
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          ...mockMapInfo.layers[0],
          layerType: 'DATAFLOW_POINT_TRACK',
          url: mockUrl,
          wsUrl: '',
          dataSource: '',
          credential: { token: 'test' },
          filterCondition: '>5',
          projection: 'EPSG:3857',
          pointStyle: {
            type: 'IMAGE_POINT',
            imageInfo: {
              url: 'http://test'
            }
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/676516522/content.json?pageSize=9999999&currentPage=1': mockData,
      [mockUrl + '.json?token=test']: mockDataflow
    };
    mockFetch(fetchResource1);
    window.jsonsql = {
      query: () => {
        return [{}];
      }
    };
    const mapOption = undefined;
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mapOption);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add DATAFLOW_POINT_TRACKLayer with style is SVG_POINT', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          ...mockMapInfo.layers[0],
          layerType: 'DATAFLOW_POINT_TRACK',
          wsUrl: '',
          dataSource: '',
          filterCondition: '>5',
          projection: 'EPSG:3857',
          pointStyle: {
            type: 'SVG_POINT',
            url: 'http://test'
          }
        }
      ]
    };

    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo
    };
    mockFetch(fetchResource1);

    const mapOption = undefined;
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mapOption);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('resize map', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    const spy = jest.spyOn(viewModel, 'echartsLayerResize');
    await flushPromises();
    viewModel.resize();
    expect(spy).toBeCalled();
  });

  it('_addlayers HOSTED_TILE RESTDATA', async done => {
    const result = [
      {
        name: 'test',
        type: 'FeatureCollection'
      }
    ];
    const result1 = {
      fileId: 'test',
      datasetName: 'test',
      dataItemServices: [
        {
          serviceType: 'RESTDATA',
          address: 'https://fakeiportal.supermap.io/iportal/'
        }
      ]
    };
    const datasource = {
      code: 200,
      datasourceNames: ['captial']
    };
    const datasetsInfo = {
      datasetInfo: {
        prjCoordSys: {
          epsgCode: '3857'
        },
        bounds: [0, 1, 0, 1]
      }
    };
    const result2 = {
      error: {
        code: 400
      }
    };
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'HOSTED_TILE',
          serverId: '123'
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/123/datasets.json': result,
      'https://fakeiportal.supermap.io/iportal/web/datas/123.json': result1,
      'https://fakeiportal.supermap.io/iportal//data/datasources.json': datasource,
      'https://fakeiportal.supermap.io/iportal//data/datasources/captial/datasets/test': datasetsInfo,
      'https://fakeiportal.supermap.io/iportal//data/datasources/captial/datasets/test/tilefeature.mvt': result2
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    // viewModel._addLayers([layer]);
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });
  it('_addlayers HOSTED_TILE dataItemServices.length = 0', async done => {
    const result = [
      {
        name: 'test',
        type: 'FeatureCollection'
      }
    ];
    const result1 = {
      fileId: 'test',
      datasetName: 'test',
      dataItemServices: []
    };
    const datasource = {
      code: 200,
      datasourceNames: ['captial']
    };
    const datasetsInfo = {
      datasetInfo: {
        prjCoordSys: {
          epsgCode: '3857'
        },
        bounds: [0, 1, 0, 1]
      }
    };
    const result2 = {
      error: {
        code: 400
      }
    };
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'HOSTED_TILE',
          serverId: '123'
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/123/datasets.json': result,
      'https://fakeiportal.supermap.io/iportal/web/datas/123.json': result1,
      'https://fakeiportal.supermap.io/iportal//data/datasources.json': datasource,
      'https://fakeiportal.supermap.io/iportal//data/datasources/captial/datasets/test': datasetsInfo,
      'https://fakeiportal.supermap.io/iportal//data/datasources/captial/datasets/test/tilefeature.mvt': result2
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ getlayerdatasourcefailed: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add vectorLayer_point with SYMBOL_POINT', async done => {
    document.getElementById = () => {
      return {
        classList: {
          add: () => jest.fn()
        }
      };
    };
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'VECTOR',
          name: '浙江省高等院校(3)',
          visible: true,
          featureType: 'POINT',
          dataSource: { type: 'PORTAL_DATA', serverId: '1920557079' },
          style: {
            radius: 6,
            fillColor: '#ff0000',
            fillOpacity: 0.9,
            strokeColor: '#ffffff',
            strokeWidth: 1,
            strokeOpacity: 1,
            lineDash: 'solid',
            symbolType: 'svg',
            className: 'supermapol-icons-Shape-50',
            fontSize: '16px',
            name: 'Shape2-2',
            offsetX: 0,
            offsetY: 0,
            rotation: 0,
            type: 'SYMBOL_POINT',
            unicode: '&#xe691'
          }
        }
      ]
    };
    const fetchResource = {
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/1920557079/content.json?pageSize=9999999&currentPage=1': mockData
    };
    mockFetch(fetchResource);
    const callback = jest.fn();
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add markerLayer', async done => {
    window.canvg = (a, b, c) => {
      c.renderCallback();
    };
    const mapInfo = {
      extent: {
        leftBottom: { x: -20037508.3427892, y: -20037508.3427891 },
        rightTop: { x: 20037508.3427892, y: 20037508.3427891 }
      },
      level: 5,
      center: { x: 11810617.9363554, y: 4275239.3340175 },
      baseLayer: {
        layerType: 'TILE',
        name: 'China',
        url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
      },
      layers: [
        {
          layerType: 'MARKER',
          visible: true,
          name: '民航数',
          serverId: 123456,
          layerStyle: {
            labelField: 'minghang'
          }
        }
      ],
      description: '',
      projection: 'EPSG:3857',
      title: 'unique_民航数据',
      version: '1.0'
    };
    const fetchResource = {
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/123456/content.json?pageSize=9999999&currentPage=1': mockCsvGeojson
    };
    mockFetch(fetchResource);
    const callback = jest.fn();
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    setTimeout(() => {
      expect(callback.mock.called).toBeTruthy;
      done();
    }, 100);
  });

  xit('setZoom null', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    await flushPromises();
    const spy = jest.spyOn(viewModel.map, 'setZoom');
    await flushPromises();
    expect(spy).toBeCalled();
  });
  xit('setMinZoom null', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    const spy = jest.spyOn(viewModel.map, 'setMinZoom');
    await flushPromises();
    viewModel.setMinZoom();
    expect(spy).toBeCalled();
  });
  xit('setMaxZoom null', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    const spy = jest.spyOn(viewModel.map, 'setMaxZoom');
    await flushPromises();
    viewModel.setMaxZoom();
    expect(spy).toBeCalled();
  });
  xit('setPitch null', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    const spy = jest.spyOn(viewModel.map, 'setPitch');
    await flushPromises();
    viewModel.setPitch();
    expect(spy).toBeCalled();
  });
});
