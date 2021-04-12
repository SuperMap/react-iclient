class Evented {
  on(){};
}

module.exports.mapboxgl = {
  Map: jest.fn(),
  Evented: Evented,
  Popup: jest.fn(),
  LngLat: jest.fn(),
  CRS: {
    get: get => {
      return true;
    }
  }
};
