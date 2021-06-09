var supermap = require('./supermap_mapboxgl');
var mapboxgl = require('./mapboxgl').mapboxgl;

module.exports.SuperMap = require('./supermap');
mapboxgl.supermap = supermap;
