import { hexToRgba, reservedDecimal, getColorWithOpacity } from '../util';

describe('util test', () => {
  beforeAll(() => {});

  it('hexToRgba', done => {
    const result = hexToRgba('#000000', 0.5);
    expect(result).toBe('rgba(0,0,0,0.5)');
    done();
  });
  it('reservedDecimal', done => {
    const result = reservedDecimal(0.653, 1);
    expect(result).toBe('0.7');
    done();
  });

  it('getColorWithOpacity', done => {
    const result = getColorWithOpacity('rgb(0,0,0)', 0.5);
    expect(result).toBe('rgba(0,0,0,0.5)');
    done();
  });

  afterAll(() => {});
});
