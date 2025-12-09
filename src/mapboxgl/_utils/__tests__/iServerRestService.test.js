import iServerRestService from '../iServerRestService';

describe('iServerRestService', () => {
  let service;
  let mockUrl;

  beforeEach(() => {
    mockUrl = 'https://fakeiserver.supermap.io/iserver/services/map-world/rest/maps/World';
    service = new iServerRestService(mockUrl);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create service with url', () => {
    expect(service.url).toBe(mockUrl);
    expect(service).toBeInstanceOf(iServerRestService);
  });

  it('should check valid url', () => {
    expect(service._checkUrl('http://www.supermap.com')).toBe(true);
    expect(service._checkUrl('https://www.supermap.com')).toBe(true);
    expect(service._checkUrl('file:///C:/test')).toBe(true);
    expect(service._checkUrl('')).toBe(false);
    expect(service._checkUrl('invalid-url')).toBe(false);
  });

  it('should return null when url is invalid', () => {
    const invalidService = new iServerRestService('invalid-url');
    const result = invalidService.getData({}, {});
    expect(result).toBeNull();
  });

  it('should determine data type correctly', () => {
    expect(service._getDataType('123')).toBe('NUMBER');
    expect(service._getDataType('0')).toBe('NUMBER');
    expect(service._getDataType('-45.67')).toBe('NUMBER');
    expect(service._getDataType('text')).toBe('STRING');
    expect(service._getDataType('2020-10-10')).toBe('DATE');
    expect(service._getDataType('')).toBe('STRING');
    expect(service._getDataType(null)).toBe('STRING');
    expect(service._getDataType(undefined)).toBe('STRING');
  });

  it('should identify numbers correctly', () => {
    expect(service._isNumber('123')).toBe(true);
    expect(service._isNumber('0')).toBe(true);
    expect(service._isNumber('-45.67')).toBe(true);
    expect(service._isNumber('abc')).toBe(false);
    expect(service._isNumber('')).toBe(true); // 空字符串转换为数字是0，所以返回true
  });

  it('should identify dates correctly', () => {
    expect(service._isDate('2020-10-10')).toBe(true);
    expect(service._isDate('2020/10/10')).toBe(true);
    expect(service._isDate('2020.10.10')).toBe(true);
    expect(service._isDate('20-10-10')).toBe(false);
    expect(service._isDate('abc')).toBe(false);
  });

  it('should generate attribute filter from keywords', () => {
    const fields = ['field1', 'field2', 'field3'];
    const keyword = 'test';
    const filter = service._getAttributeFilterByKeywords(fields, keyword);
    expect(filter).toBe("field1 LIKE '%test%' ORfield2 LIKE '%test%' ORfield3 LIKE '%test%'");
  });

  it('should handle map features request', () => {
    const datasetInfo = {
      dataUrl: mockUrl,
      mapName: 'World'
    };
    const queryInfo = {
      maxFeatures: 10
    };

    // Mock internal methods
    const getMapFeatureBySqlSpy = jest.spyOn(service, '_getMapFeatureBySql').mockImplementation(() => {});

    service.getMapFeatures(datasetInfo, queryInfo);

    expect(datasetInfo.dataUrl).toBe(mockUrl);
    expect(queryInfo.name).toBe('World');
    expect(getMapFeatureBySqlSpy).toHaveBeenCalledWith(mockUrl, queryInfo);

    getMapFeatureBySqlSpy.mockRestore();
  });

  it('should handle map features request with keyword', () => {
    const datasetInfo = {
      dataUrl: mockUrl,
      mapName: 'World'
    };
    const queryInfo = {
      maxFeatures: 10,
      keyWord: 'test'
    };

    // Mock internal methods
    const getRestMapFieldsSpy = jest.spyOn(service, '_getRestMapFields').mockImplementation((url, name, callback) => {
      callback(['field1', 'field2']);
    });
    const getMapFeatureBySqlSpy = jest.spyOn(service, '_getMapFeatureBySql').mockImplementation(() => {});

    service.getMapFeatures(datasetInfo, queryInfo);

    expect(getRestMapFieldsSpy).toHaveBeenCalledWith(mockUrl, 'World', expect.any(Function));
    expect(queryInfo.attributeFilter).toBe("field1 LIKE '%test%' ORfield2 LIKE '%test%'");
    expect(getMapFeatureBySqlSpy).toHaveBeenCalledWith(mockUrl, queryInfo);

    getRestMapFieldsSpy.mockRestore();
    getMapFeatureBySqlSpy.mockRestore();
  });

  it('should handle data features request', () => {
    const datasetInfo = {
      datasetName: 'Capitals',
      dataSourceName: 'World',
      dataUrl: 'https://fakeiserver.supermap.io/iserver/services/data-world/rest/data'
    };
    const queryInfo = {
      maxFeatures: 10
    };

    // Mock internal methods
    const getDataFeaturesBySqlSpy = jest.spyOn(service, '_getDataFeaturesBySql').mockImplementation(() => {});

    service.getDataFeatures(datasetInfo, queryInfo);

    expect(queryInfo.name).toBe('Capitals@World');
    expect(queryInfo.datasetNames).toEqual(['World:Capitals']);
    expect(getDataFeaturesBySqlSpy).toHaveBeenCalledWith(datasetInfo.dataUrl, queryInfo);

    getDataFeaturesBySqlSpy.mockRestore();
  });

  it('should handle data features request with keyword', () => {
    const datasetInfo = {
      datasetName: 'Capitals',
      dataSourceName: 'World',
      dataUrl: 'https://fakeiserver.supermap.io/iserver/services/data-world/rest/data'
    };
    const queryInfo = {
      maxFeatures: 10,
      keyWord: 'test'
    };

    // Mock internal methods
    const getRestDataFieldsSpy = jest.spyOn(service, '_getRestDataFields').mockImplementation((url, callback) => {
      callback(['field1', 'field2']);
    });
    const getDataFeaturesBySqlSpy = jest.spyOn(service, '_getDataFeaturesBySql').mockImplementation(() => {});

    service.getDataFeatures(datasetInfo, queryInfo);

    expect(queryInfo.name).toBe('Capitals@World');
    expect(queryInfo.datasetNames).toEqual(['World:Capitals']);
    expect(queryInfo.attributeFilter).toBe("field1 LIKE '%test%' ORfield2 LIKE '%test%'");
    expect(getDataFeaturesBySqlSpy).toHaveBeenCalledWith(datasetInfo.dataUrl, queryInfo);

    getRestDataFieldsSpy.mockRestore();
    getDataFeaturesBySqlSpy.mockRestore();
  });

  it('should route to correct method based on url', () => {
    const mapService = new iServerRestService('https://fakeiserver.supermap.io/iserver/services/map-world/rest/maps/World');
    const dataService = new iServerRestService('https://fakeiserver.supermap.io/iserver/services/data-world/rest/data/');

    const getMapFeaturesSpy = jest.spyOn(mapService, 'getMapFeatures').mockImplementation(() => {});
    const getDataFeaturesSpy = jest.spyOn(dataService, 'getDataFeatures').mockImplementation(() => {});

    mapService._getDatasetInfoSucceed({}, {});
    dataService._getDatasetInfoSucceed({}, {});

    expect(getMapFeaturesSpy).toHaveBeenCalled();
    expect(getDataFeaturesSpy).toHaveBeenCalled();

    getMapFeaturesSpy.mockRestore();
    getDataFeaturesSpy.mockRestore();
  });

  it('should handle successful feature retrieval from map service', (done) => {
    const mockResults = {
      result: {
        recordsets: [{
          features: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  NAME: 'China'
                },
                geometry: {
                  type: 'Point',
                  coordinates: [100, 30]
                }
              }
            ]
          },
          fields: ['NAME'],
          fieldTypes: ['STRING']
        }]
      }
    };

    service.on('getdatasucceeded', (data) => {
      expect(data.features).toHaveLength(1);
      expect(data.fieldCaptions).toEqual(['NAME']);
      expect(data.fieldTypes).toEqual(['STRING']);
      done();
    });

    service._getFeaturesSucceed(mockResults);
  });

  it('should handle successful feature retrieval from data service', (done) => {
    const mockResults = {
      result: {
        features: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                NAME: 'China'
              },
              geometry: {
                type: 'Point',
                coordinates: [100, 30]
              }
            }
          ]
        }
      }
    };

    service.on('getdatasucceeded', (data) => {
      expect(data.features).toHaveLength(1);
      expect(data.fieldCaptions).toEqual(['NAME']);
      expect(data.fieldTypes).toEqual(['STRING']);
      done();
    });

    service._getFeaturesSucceed(mockResults);
  });

  it('should fire featureisempty event when no features found in map service', (done) => {
    const mockResults = {
      result: {
        recordsets: [{
          features: {
            type: 'FeatureCollection',
            features: []
          },
          fields: [],
          fieldTypes: []
        }]
      }
    };

    service.on('featureisempty', (result) => {
      expect(result.results).toEqual(mockResults);
      done();
    });

    service._getFeaturesSucceed(mockResults);
  });

  it('should fire featureisempty event when no features found in data service', (done) => {
    const mockResults = {
      result: {
        features: {
          type: 'FeatureCollection',
          features: []
        }
      }
    };

    service.on('featureisempty', (result) => {
      expect(result.results).toEqual(mockResults);
      done();
    });

    service._getFeaturesSucceed(mockResults);
  });

  it('should fire getdatafailed event when result is invalid', (done) => {
    const mockResults = {};

    service.on('getdatafailed', (result) => {
      expect(result.results).toEqual(mockResults);
      done();
    });

    service._getFeaturesSucceed(mockResults);
  });

  it('should handle getData method', () => {
    const datasetInfo = {};
    const queryInfo = {};

    const checkUrlSpy = jest.spyOn(service, '_checkUrl').mockReturnValue(true);
    const getDatasetInfoSucceedSpy = jest.spyOn(service, '_getDatasetInfoSucceed').mockImplementation(() => {});

    service.getData(datasetInfo, queryInfo);

    expect(checkUrlSpy).toHaveBeenCalledWith(mockUrl);
    expect(getDatasetInfoSucceedSpy).toHaveBeenCalledWith(datasetInfo, queryInfo);

    checkUrlSpy.mockRestore();
    getDatasetInfoSucceedSpy.mockRestore();
  });

  // 测试未覆盖的代码行
  it('should handle getDataFeaturesBySql with maxFeatures >= 1000', () => {
    const url = 'https://fakeiserver.supermap.io/iserver/services/data-world/rest/data';
    const queryInfo = {
      name: 'Capitals@World',
      datasetNames: ['World:Capitals'],
      maxFeatures: 1000,
      attributeFilter: 'SMID>0'
    };

    // 模拟 SuperMap.GetFeaturesBySQLParameters 构造函数
    const getFeaturesBySQLParametersSpy = jest.spyOn(SuperMap, 'GetFeaturesBySQLParameters')
      .mockImplementation(() => {
        return {};
      });
      
    // 模拟 SuperMap.GetFeaturesBySQLService 构造函数
    const getFeaturesBySQLServiceSpy = jest.spyOn(SuperMap, 'GetFeaturesBySQLService')
      .mockImplementation(() => {
        return {
          processAsync: jest.fn()
        };
      });

    service._getDataFeaturesBySql(url, queryInfo);

    // 验证 toIndex 被设置为 -1 (当 maxFeatures >= 1000 时)
    expect(getFeaturesBySQLParametersSpy).toHaveBeenCalledWith({
      queryParameter: {
        name: 'Capitals@World',
        attributeFilter: 'SMID>0'
      },
      datasetNames: ['World:Capitals'],
      fromIndex: 0,
      toIndex: -1,
      maxFeatures: -1
    });

    getFeaturesBySQLParametersSpy.mockRestore();
    getFeaturesBySQLServiceSpy.mockRestore();
  });

  it('should handle getDataFeaturesBySql with maxFeatures < 1000', () => {
    const url = 'https://fakeiserver.supermap.io/iserver/services/data-world/rest/data';
    const queryInfo = {
      name: 'Capitals@World',
      datasetNames: ['World:Capitals'],
      maxFeatures: 100,
      attributeFilter: 'SMID>0'
    };

    // 模拟 SuperMap.GetFeaturesBySQLParameters 构造函数
    const getFeaturesBySQLParametersSpy = jest.spyOn(SuperMap, 'GetFeaturesBySQLParameters')
      .mockImplementation(() => {
        return {};
      });
      
    // 模拟 SuperMap.GetFeaturesBySQLService 构造函数
    const getFeaturesBySQLServiceSpy = jest.spyOn(SuperMap, 'GetFeaturesBySQLService')
      .mockImplementation(() => {
        return {
          processAsync: jest.fn()
        };
      });

    service._getDataFeaturesBySql(url, queryInfo);

    // 验证 toIndex 被设置为 maxFeatures - 1 (当 maxFeatures < 1000 时)
    expect(getFeaturesBySQLParametersSpy).toHaveBeenCalledWith({
      queryParameter: {
        name: 'Capitals@World',
        attributeFilter: 'SMID>0'
      },
      datasetNames: ['World:Capitals'],
      fromIndex: 0,
      toIndex: 99, // maxFeatures - 1
      maxFeatures: -1
    });

    getFeaturesBySQLParametersSpy.mockRestore();
    getFeaturesBySQLServiceSpy.mockRestore();
  });

  it('should handle getMapFeatureBySql', () => {
    const url = 'https://fakeiserver.supermap.io/iserver/services/map-world/rest/maps/World';
    const queryInfo = {
      name: 'World',
      maxFeatures: 10,
      attributeFilter: 'SMID>0'
    };

    // 模拟 SuperMap.QueryBySQLParameters 构造函数
    const queryBySQLParametersSpy = jest.spyOn(SuperMap, 'QueryBySQLParameters')
      .mockImplementation(() => {
        return {};
      });
      
    // 模拟 SuperMap.QueryBySQLService 构造函数
    const queryBySQLServiceSpy = jest.spyOn(SuperMap, 'QueryBySQLService')
      .mockImplementation(() => {
        return {
          processAsync: jest.fn()
        };
      });

    service._getMapFeatureBySql(url, queryInfo);

    // 验证参数正确传递
    expect(queryBySQLParametersSpy).toHaveBeenCalledWith({
      queryParams: [
        {
          name: 'World',
          attributeFilter: 'SMID>0'
        }
      ],
      expectCount: 10
    });

    queryBySQLParametersSpy.mockRestore();
    queryBySQLServiceSpy.mockRestore();
  });

  it('should handle getRestDataFields successfully', (done) => {
    // 模拟 FetchRequest.get 方法
    const mockResponse = {
      json: jest.fn().mockResolvedValue({
        fieldNames: ['field1', 'field2', 'field3']
      })
    };

    const fetchRequestGetSpy = jest.spyOn(SuperMap.FetchRequest, 'get')
      .mockResolvedValue(mockResponse);

    service._getRestDataFields('https://fakeurl.com/fields', (fields) => {
      expect(fields).toEqual(['field1', 'field2', 'field3']);
      fetchRequestGetSpy.mockRestore();
      done();
    });
  });

  it('should handle getRestDataFields with error', () => {
    // 模拟控制台日志记录
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // 模拟 FetchRequest.get 方法抛出异常
    const fetchRequestGetSpy = jest.spyOn(SuperMap.FetchRequest, 'get')
      .mockRejectedValue(new Error('Network error'));

    service._getRestDataFields('https://fakeurl.com/fields', () => {});

    // 等待异步操作完成
    setTimeout(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(Error));
      consoleLogSpy.mockRestore();
      fetchRequestGetSpy.mockRestore();
    }, 0);
  });
});