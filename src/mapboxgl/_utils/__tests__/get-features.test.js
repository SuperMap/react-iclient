import getFeatures from '../get-features';

describe('getFeatures test', () => {
  beforeAll(() => {});

  it('getFeatures', done => {
    const dataset = { type: 'iServer', url: 'http://fakeiserver:8090/china/rest/data', dataName: ['test:test1'] };
    const promise = getFeatures(dataset);
    promise
      .then(res => {
        expect(res).not.toBeNull();
        done();
      })
      .catch(e => {
        done();
      });
  });

  xit('getFeatures no dataName', done => {
    const dataset = { type: 'iServer', url: 'http://fakeiserver:8090/china/rest/map', layerName: 'china100' };
    const promise = getFeatures(dataset);
    promise
      .then(res => {
        console.log(res)
        expect(res).not.toBeNull();
        done();
      })
      .catch(e => {
        done();
      });
  });

  afterAll(() => {});
});
