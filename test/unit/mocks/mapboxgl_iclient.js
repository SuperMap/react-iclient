var mapboxgl = require('./mapboxgl').mapboxgl;

module.exports.SuperMap = jest.fn();
mapboxgl.supermap = jest.fn();
