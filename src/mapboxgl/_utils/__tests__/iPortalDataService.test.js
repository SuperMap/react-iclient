import iPortalDataService from '../iPortalDataService';

describe(`iPortalDataService`, () => {
  let wrapper;
  beforeEach(() => {
    wrapper = null;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    if (wrapper) {
      wrapper = null;
    }
  });
  it('initial-serverUrl', done => {
    const url = 'https://fakeiportal.supermap.io/iportal';
    const withCredentials = true;
    const service = new iPortalDataService(url, withCredentials);
    expect(service.url).toBe(url);
    expect(service.withCredentials).toBe(withCredentials);
    done();
  });
  it('getData', done => {
    const url = 'https://fakeiportal.supermap.io/iportal';
    const withCredentials = true;
    const queryInfo = { maxFeatures: 20 };
    const preferContent = true;
    const service = new iPortalDataService(url, withCredentials);
    expect(service.url).toBe(url);
    expect(service.withCredentials).toBe(withCredentials);
    service.getData(queryInfo, preferContent);

    service.on('getdatasucceeded', function(data) {
      expect(data).not.toBe(null);
      expect(data.features.length).toBe(7);
      done();
    });
  });
  it('getData-portalDataService', done => {
    const url = 'https://fakeiportal.supermap.io/iportal/portalDataService';
    const withCredentials = true;
    const queryInfo = { maxFeatures: 20 };
    const preferContent = false;
    const service = new iPortalDataService(url, withCredentials);
    expect(service.url).toBe(url);
    expect(service.withCredentials).toBe(withCredentials);
    service.getData(queryInfo, preferContent);
    service.on('getdatasucceeded', function(data) {
      expect(data).not.toBe(null);
      expect(data.features.length).toBe(1);
      done();
    });
  });
  it('getData-wrong-succeed', done => {
    const url = 'https://fakeiportal.supermap.io/iportal/wrong-succeed';
    const withCredentials = true;
    const queryInfo = { maxFeatures: 20 };
    const preferContent = false;
    const service = new iPortalDataService(url, withCredentials);
    expect(service.url).toBe(url);
    expect(service.withCredentials).toBe(withCredentials);
    service.getData(queryInfo, preferContent);
    service.on('getdatafailed', function(e) {
      expect(e.data.succeed).toBe(false);
      done();
    });
  });
});
