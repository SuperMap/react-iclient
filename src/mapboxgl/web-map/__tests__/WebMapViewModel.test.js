import WebMapViewModel from '../WebMapViewModel';
import mockFetch from '@test/unit/mocks/FetchRequest';
import mockMapInfo from '@test/unit/mocks/data/common-map-info.json';
import mockiPortalServiceProxy from '@test/unit/mocks/data/iportal-service-proxy.json';
import mockData from '@test/unit/mocks/data/data-minhang.js';
import mockCsvGeojson from '@test/unit/mocks/data/csv-geojson.json';
import baseLayers from '@test/unit/mocks/data/baseLayers.json';
import { wmtsCapabilitiesText } from '@test/unit/mocks/data/CapabilitiesText.js';
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
      urls: [{ url: 'https://fakeiportal.supermap.io/iportal/wsUrl/iserver/services/noSource/dataflow' }],
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
          labelStyle: {},
          visible: true,
          lineStyle: {},
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

  it('add DATAFLOW_POINT_TRACKLayer with style is other', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          ...mockMapInfo.layers[0],
          layerType: 'DATAFLOW_POINT_TRACK',
          name: '',
          wsUrl: '',
          dataSource: '',
          filterCondition: '>5',
          projection: 'EPSG:3857',
          pointStyle: {
            type: '',
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
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('_addlayers other type catch', async done => {
    const result = [
      {
        name: 'test',
        type: 'FeatureCollection'
      }
    ];
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'other',
          dataSource: {
            serverId: '676516522',
            accessType: 'other'
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'https://fakeiportal.supermap.io/iportal/web/datas/123/datasets.json': result
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

  it('_addlayers HOSTED_TILE RESTMAP', async done => {
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
        },
        {
          serviceType: 'RESTMAP',
          address: 'https://fakeiportal.supermap.io/iportal/'
        }
      ]
    };
    const mapjson = [{ path: 'test' }];
    const restMapInfo = { bounds: { left: 0, top: 0, right: 0, bottom: 0 } };
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
      'https://fakeiportal.supermap.io/iportal/apps/viewer/getUrlResource.json?url=https%3A%2F%2Ffakeiportal.supermap.io%2Fiportal%2F/maps.json': mapjson,
      'https://fakeiportal.supermap.io/iportal/apps/viewer/getUrlResource.json?url=test.json?prjCoordSys={"epsgCode":"3857"}': restMapInfo
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });
  it('_addlayers REST_DATA', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          serverId: '123',
          dataSource: {
            type: 'REST_DATA',
            url: 'https://fakeiportal.supermap.io/iportal/processCompleted',
            datasourceName: 'test'
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('_addlayers REST_DATA failed', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          serverId: '123',
          dataSource: {
            type: 'REST_DATA',
            url: 'https://fakeiportal.supermap.io/iportal/processFailed',
            datasourceName: 'test'
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo
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

  it('_addlayers REST_MAP', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          serverId: '123',
          dataSource: {
            type: 'REST_MAP',
            url: 'https://fakeiportal.supermap.io/iportal/processCompleted',
            datasourceName: 'test'
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('_addlayers REST_MAP failed', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          serverId: '123',
          dataSource: {
            type: 'REST_MAP',
            url: 'https://fakeiportal.supermap.io/iportal/processFailed',
            datasourceName: 'test'
          }
        }
      ]
    };
    const fetchResource1 = {
      ...fetchResource,
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo
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
      ...mockMapInfo,
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

  it('setZoom 0', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    await flushPromises();
    const spy = jest.spyOn(viewModel.map, 'setZoom');
    viewModel.setZoom(0);
    expect(spy).toHaveBeenCalled();
  });
  it('setMinZoom 0', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    await flushPromises();
    const spy = jest.spyOn(viewModel.map, 'setMinZoom');
    viewModel.setMinZoom(0);
    expect(spy).toBeCalled();
  });
  it('setMaxZoom 0', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    await flushPromises();
    const spy = jest.spyOn(viewModel.map, 'setMaxZoom');
    viewModel.setMaxZoom(0);
    expect(spy).toBeCalled();
  });
  it('setPitch 0', async () => {
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    await flushPromises();
    const spy = jest.spyOn(viewModel.map, 'setPitch');
    viewModel.setPitch(0);
    expect(spy).toBeCalled();
  });

  it('add baselayer which is bing', async done => {
    const fetchResource = {
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': baseLayers['BING']
    };
    mockFetch(fetchResource);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, mockMapOptions);
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add wmtsLayer with correct url', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'WMTS',
          tileMatrixSet: 'GlobalCRS84Scale_京津地区地图',
          requestEncoding: 'KVP',
          visible: true,
          name: 'China',
          dpi: 90.7142857142857,
          url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100',
          layer: 'China',
          layerID: 'China'
        }
      ]
    };
    const fetchResource1 = {
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100': wmtsCapabilitiesText
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, { fadeDuration: 300 });
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });

  it('add wmtsLayer with correct url Custom', async done => {
    const mapInfo = {
      ...mockMapInfo,
      layers: [
        {
          layerType: 'WMTS',
          tileMatrixSet: 'Custom_京津地区地图',
          requestEncoding: 'KVP',
          visible: true,
          name: 'China',
          dpi: 90.7142857142857,
          url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100',
          layer: 'China',
          layerID: 'China'
        }
      ]
    };
    const fetchResource1 = {
      'https://fakeiportal.supermap.io/iportal/web/maps/123/map.json': mapInfo,
      'http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100': wmtsCapabilitiesText
    };
    mockFetch(fetchResource1);
    const viewModel = new WebMapViewModel(mockMapId, mockWebMapOptions, { fadeDuration: 300 });
    viewModel.on({ addlayerssucceeded: callback });
    await flushPromises();
    viewModel.map.fire('load');
    await flushPromises();
    expect(callback.mock.called).toBeTruthy;
    done();
  });
});
