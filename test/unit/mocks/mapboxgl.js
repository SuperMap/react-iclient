var LngLat = require('mapbox-gl/src/geo/lng_lat');
var Evented = require('mapbox-gl/src/util/evented');

module.exports.mapboxgl = {
  Map: require('./map'),
  Evented: Evented,
  Popup: jest.fn(),
  LngLat: LngLat,
  CRS: {
    get: get => {
      return true;
    }
  },
  MercatorCoordinate: {
    fromLngLat: coor => {
      return coor;
    }
  }
};
