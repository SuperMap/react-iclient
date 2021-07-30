import RestService from '../RestService';
import { rest_service_url, echart_rest_data } from '@test/unit/mocks/services';

describe('rest service test', () => {
  let restService;

  beforeAll(() => {
    restService = null;
  });

  it('fetch all data', () => {
    restService = new RestService();
    expect(restService).not.toBeNull();
    restService.getData(rest_service_url);
    restService.on('getdatasucceeded', (serviceResult) => {
      expect(serviceResult).not.toBeNull();
      expect(serviceResult.data).not.toBeNull();
      expect(Object.keys(serviceResult.data).length).toEqual(Object.keys(echart_rest_data.data).length);
    });
  });

  it('fetch one data', () => {
    restService = new RestService();
    expect(restService).not.toBeNull();
    const queryInfo = { maxFeatures: 1 };
    restService.getData(rest_service_url, queryInfo);
    restService.on('getdatasucceeded', (serviceResult) => {
      expect(serviceResult).not.toBeNull();
      expect(serviceResult.data).not.toBeNull();
      expect(Object.keys(serviceResult.data).length).toBe(1);
      expect(Object.keys(serviceResult.data).length).not.toEqual(Object.keys(echart_rest_data.data).length);
    });
  });

  it('fetch failed data', () => {
    restService = new RestService();
    expect(restService).not.toBeNull();
    restService.getData(rest_service_url)
    restService.on('getdatafailed', (serviceResult) => {
      expect(serviceResult).not.toBeNull();
      expect(serviceResult.data).toBeNull();
    });
  });

  afterAll(() => {
    restService = null;
  });
});
