import {
  portal_data,
  portal_data1,
  portal_data2,
  chart_data,
  marker_data,
  webmap_markerLayer,
  webmap_heatLayer,
  iportal_content,
  webmap_vectorLayer_point,
  webmap_vectorLayer_line,
  webmap_rangeLayer,
  webmap_ranksymbolLayer,
  webmap_uniqueLayer_polygon
} from './services';
import '../../../public/libs/iclient-mapboxgl/iclient-mapboxgl.min';

var SuperMap = (window.SuperMap = window.SuperMap || {});

SuperMap.SpatialQueryMode = {
  CONTAIN: 'CONTAIN',
  CROSS: 'CROSS',
  DISJOINT: 'DISJOINT',
  IDENTITY: 'IDENTITY',
  INTERSECT: 'INTERSECT',
  NONE: 'NONE',
  OVERLAP: 'OVERLAP',
  TOUCH: 'TOUCH',
  WITHIN: 'WITHIN'
};
SuperMap.Widgets = window.SuperMap.Widgets || {};
SuperMap.Widgets.FileReaderUtil = {};
SuperMap.ColorsPickerUtil = {};
SuperMap.ColorsPickerUtil.getGradientColors = function() {
  return ['#d53e4f', '#d6404f', '#dd4f51', '#de5151', '#df5351', '#e05652', '#e25852', '#e35a52'];
};
SuperMap.ArrayStatistic = {};
SuperMap.ArrayStatistic.getArraySegments = function(array, type, segNum) {
  return [
    0.406820286455,
    2.6944246004791665,
    4.982028914503333,
    7.2696332285275,
    9.557237542551666,
    11.844841856575833,
    14.1324461706
  ];
};
SuperMap.SecurityManager = {
  registerToken: () => {}
};
var GetFeaturesBySQLParameters = (SuperMap.GetFeaturesBySQLParameters = jest.fn());
var GetFeaturesBySQLParameters = (SuperMap.GetFeaturesByBoundsParameters = jest.fn());
var QueryByGeometryParameters = (SuperMap.QueryByGeometryParameters = jest.fn());
var QueryBySQLParameters = (SuperMap.QueryBySQLParameters = jest.fn());
var GeoCodingParameter = (SuperMap.GeoCodingParameter = jest.fn());
var FilterParameter = (SuperMap.FilterParameter = jest.fn());
var QueryByBoundsParameters = (SuperMap.QueryByBoundsParameters = jest.fn());
var isXField = (SuperMap.Widgets.FileReaderUtil.isXField = jest.fn());
var isYField = (SuperMap.Widgets.FileReaderUtil.isYField = jest.fn());
var Util = (SuperMap.Util = {
  urlPathAppend: function(a, b) {
    return `${a}/${b}`;
  },
  urlAppend: function(a, b) {
    return `${a}/${b}`;
  }
});
var document = {};
var documentElement = (document.documentElement = {});
var FetchRequest = (SuperMap.FetchRequest = {
  get: function(url, params, options) {
    return new Promise((resolve, reject) => {
      if (url.indexOf('iportal/web/maps/test') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(portal_data))));
      } else if (url.indexOf('iportal/web/maps/wrong-layer') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(portal_data1))));
      } else if (url.indexOf('wrong/content.json?pageSize=9999999&currentPage=1') > -1) {
        process.nextTick(() => reject(''));
      } else if (url.indexOf('676516522') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(chart_data))));
      } else if (url.indexOf('WMTS') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(portal_data2))));
      } else if (url.indexOf('123456/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_markerLayer))));
      } else if (url.indexOf('12345678/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_heatLayer))));
      } else if (url.indexOf('datas/123456/content.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(marker_data))));
      } else if (url.indexOf('147258369/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_vectorLayer_point))));
      } else if (url.indexOf('159357852/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_vectorLayer_line))));
      } else if (url.indexOf('167943279/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_rangeLayer))));
      } else if (url.indexOf('123456789/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_ranksymbolLayer))));
      } else if (url.indexOf('2064629293/map.json') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(webmap_uniqueLayer_polygon))));
      } else if (url.indexOf('content.json?pageSize=9999999&currentPage=1') > -1) {
        process.nextTick(() => resolve(new Response(JSON.stringify(iportal_content))));
      } else {
        process.nextTick(() => reject('未匹配到'));
      }
    });
  }
});

var events = require('events');

var getFeatureEvent = new events.EventEmitter();
var results_getFeaturesBySQLService = {
  recordsets: [
    {
      datasetName: 'Capitals@World#1',
      features: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              SMID: '1',
              NAME: '四川省'
            },
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [101.84004968, 26.0859968692659],
                    [101.95654423, 26.0888446242659],
                    [101.84004968, 26.0859968692659]
                  ]
                ]
              ]
            }
          }
        ]
      },
      fieldCaptions: [
        'SmID',
        'SmX',
        'SmY',
        'SmLibTileID',
        'SmUserID',
        'SmGeometrySize',
        'USERID',
        'POP',
        'CAPITAL_LO',
        'CAPITAL_CH',
        'COUNTRY_CH',
        'CAPITAL_EN',
        'COUNTRY_EN',
        'COUNTRY',
        'CAP_POP',
        'CAPITAL'
      ],
      fieldTypes: [
        'INT32',
        'DOUBLE',
        'DOUBLE',
        'INT32',
        'INT32',
        'INT32',
        'INT32',
        'DOUBLE',
        'WTEXT',
        'WTEXT',
        'WTEXT',
        'WTEXT',
        'WTEXT',
        'WTEXT',
        'DOUBLE',
        'WTEXT'
      ],
      fields: [
        'SmID',
        'SmX',
        'SmY',
        'SmLibTileID',
        'SmUserID',
        'SmGeometrySize',
        'USERID',
        'POP',
        'CAPITAL_LO',
        'CAPITAL_CH',
        'COUNTRY_CH',
        'CAPITAL_EN',
        'COUNTRY_EN',
        'COUNTRY',
        'CAP_POP',
        'CAPITAL'
      ]
    }
  ],
  totalCount: 0,
  currentCount: 0,
  customResponse: null,
  succeed: true
};

var results = {
  result: results_getFeaturesBySQLService
};

var GetFeaturesBySQLService = (SuperMap.GetFeaturesBySQLService = (url, options) => {
  getFeatureEvent.on('processCompleted', options.eventListeners.processCompleted);
  return {
    processAsync: processAsync
  };
});
var processAsync = (SuperMap.GetFeaturesBySQLService.processAsync = getFeatureBySQLParams => {
  setTimeout(() => {
    getFeatureEvent.emit('processCompleted', results);
  }, 0);
});

var QueryBySQLService = (SuperMap.QueryBySQLService = (url, options) => {
  getFeatureEvent.on('processCompleted', options.eventListeners.processCompleted);
  return {
    processAsync: processAsync
  };
});

module.exports = SuperMap;
