import airport from './data/airport.json';
const portal_data = {
  extent: {
    leftBottom: { x: -20037508.342789248, y: -20037508.34278914 },
    rightTop: { x: 20037508.342789244, y: 20037508.342789087 }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: { x: 11615300.701720804, y: 4436879.386230171 },
  baseLayer: {
    layerType: 'TILE',
    visible: true,
    name: 'ChinaDark',
    url: 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/ChinaDark'
  },
  layers: [
    {
      layerType: 'UNIQUE',
      visible: true,
      themeSetting: {
        themeField: '名次',
        customSettings: {
          '"421': '#eff8a6',
          110: '#e8f69c',
          111: '#8bca99',
          112: '#f0f9a8',
          113: '#fee99a',
          114: '#feea9d'
        },
        colors: ['#D53E4F', '#FC8D59', '#FEE08B', '#FFFFBF', '#E6F598', '#99D594', '#3288BD']
      },
      name: '民航数据',
      featureType: 'POINT',
      xyField: { xField: 'longitude', yField: 'latitude' },
      style: {
        strokeWidth: 1,
        offsetX: 0,
        fillColor: '#3288bd',
        offsetY: 0,
        fillOpacity: 0.9,
        radius: 8,
        strokeColor: '#ffffff',
        type: 'BASIC_POINT',
        strokeOpacity: 1
      },
      projection: 'EPSG:4326',
      enableFields: ['latitude', 'longitude', 'altitude', 'geometry', '机场', 'X坐标', 'Y坐标', '名次'],
      dataSource: { accessType: 'DIRECT', type: 'PORTAL_DATA', serverId: '676516522' }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909',
  title: '民航数据-单值',
  version: '2.2.1',
  rootUrl: 'https://iportal.supermap.io/iportal/services/../'
};

const portal_data1 = {
  extent: {
    leftBottom: { x: -20037508.342789248, y: -20037508.34278914 },
    rightTop: { x: 20037508.342789244, y: 20037508.342789087 }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: { x: 11615300.701720804, y: 4436879.386230171 },
  baseLayer: {
    layerType: 'TILE',
    visible: true,
    name: 'ChinaDark',
    url: 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/ChinaDark'
  },
  layers: [
    {
      layerType: 'UNIQUE',
      visible: true,
      themeSetting: {
        themeField: '名次',
        customSettings: {
          '"421': '#eff8a6',
          110: '#e8f69c',
          111: '#8bca99',
          112: '#f0f9a8',
          113: '#fee99a'
        },
        colors: ['#D53E4F', '#FC8D59', '#FEE08B', '#FFFFBF', '#E6F598', '#99D594', '#3288BD']
      },
      name: '民航数据',
      featureType: 'POINT',
      xyField: { xField: 'longitude', yField: 'latitude' },
      style: {
        strokeWidth: 1,
        offsetX: 0,
        fillColor: '#3288bd',
        offsetY: 0,
        fillOpacity: 0.9,
        radius: 8,
        strokeColor: '#ffffff',
        type: 'BASIC_POINT',
        strokeOpacity: 1
      },
      projection: 'EPSG:4326',
      enableFields: [],
      dataSource: { accessType: 'DIRECT', type: 'PORTAL_DATA', serverId: 'wrong' }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909',
  title: '民航数据-单值',
  version: '2.2.1'
};

const chart_data = {
  fileName: '民航数据1.csv',
  type: 'CSV',
  lineNumber: 2,
  content: {
    colTitles: [
      'latitude',
      'longitude',
      'altitude',
      'geometry',
      '机场',
      'X坐标',
      'Y坐标',
      '名次',
      '2017旅客吞吐量（人次）',
      '2016旅客吞吐量（人次）',
      '同比增速%',
      '2017货邮吞吐量（吨）',
      '2016货邮吞吐量（吨）',
      '2017起降架次（架次）',
      '2016起降架次（架次）'
    ],
    rows: [
      [
        '40.07108',
        '116.588918',
        '',
        'Point',
        '北京/首都',
        '116.588918',
        '40.07108',
        '1',
        '95786296 ',
        '94393454 ',
        '-1.5',
        '2029584 ',
        '1943160 ',
        '597259 ',
        '606081 '
      ],
      [
        '31.093992',
        '121.812361',
        '',
        'Point',
        '上海/浦东',
        '121.812361',
        '31.093992',
        '2',
        '70001237 ',
        '66002414 ',
        '3.5',
        '3824280 ',
        '3440280 ',
        '496774 ',
        '479902 '
      ]
    ]
  }
};

const mapOptions = {
  container: 'map', // container id
  style: {
    version: 8,
    sources: {
      'raster-tiles': {
        attribution: 'attribution',
        type: 'raster',
        tiles: [
          'https://fakeiserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
        ],
        tileSize: 256
      }
    },
    layers: [
      {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 0,
        maxzoom: 22
      }
    ]
  },
  center: [120.143, 30.236],
  zoom: 3
};
const webmap_markerLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427891
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427891
    }
  },
  level: 5,
  center: {
    x: 11810617.9363554,
    y: 4275239.3340175
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'China',
    url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
  },
  layers: [
    {
      layerType: 'MARKER',
      visible: true,
      name: '民航数',
      serverId: 123456
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  title: 'unique_民航数据',
  version: '1.0'
};
const webmap_ranksymbolLayer = {
  extent: {
    leftBottom: { x: -20037508.342789248, y: -20037508.34278914 },
    rightTop: { x: 20037508.342789244, y: 20037508.342789087 }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: { x: 11615300.701720804, y: 4436879.386230171 },
  baseLayer: {
    layerType: 'TILE',
    visible: true,
    name: 'ChinaDark',
    url: 'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/ChinaDark'
  },
  layers: [
    {
      layerType: 'RANK_SYMBOL',
      visible: true,
      themeSetting: {
        maxRadius: 12,
        themeField: '名次',
        customSettings: {},
        minRadius: 6,
        segmentMethod: 'offset',
        segmentCount: 6
      },
      name: '民航数据',
      featureType: 'POINT',
      labelStyle: {
        offsetX: 0,
        textBaseline: 'bottom',
        fontFamily: '黑体',
        offsetY: -10,
        outlineWidth: 0,
        textAlign: 'center',
        outlineColor: '#000000',
        fontSize: '14px',
        fill: '#333',
        backgroundFill: [255, 255, 255, 0.8],
        labelField: '机场'
      },
      xyField: { xField: 'longitude', yField: 'latitude' },
      style: {
        strokeWidth: 1,
        fillColor: '#24B391',
        offsetX: 0,
        offsetY: 0,
        fillOpacity: 0.9,
        radius: 6,
        strokeColor: '#ffffff',
        type: 'BASIC_POINT',
        strokeOpacity: 1
      },
      projection: 'EPSG:4326',
      enableFields: [
        'latitude',
        'longitude',
        'altitude',
        'geometry',
        '机场',
        'X坐标',
        'Y坐标',
        '名次',
        '2017旅客吞吐量（人次）',
        '2016旅客吞吐量（人次）',
        '同比增速%',
        '2017货邮吞吐量（吨）',
        '2016货邮吞吐量（吨）',
        '2017起降架次（架次）',
        '2016起降架次（架次）'
      ],
      dataSource: { accessType: 'DIRECT', type: 'PORTAL_DATA', serverId: '676516522' }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909',
  title: '民航数据-等级符号',
  version: '2.2.1',
  rootUrl: 'https://iportal.supermap.io/iportal/services/../'
};
const webmap_heatLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427891
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427891
    }
  },
  level: 5,
  center: {
    x: 11810617.9363554,
    y: 4275239.3340175
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'China',
    url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
  },
  layers: [
    {
      layerType: 'HEAT',
      visible: true,
      name: '民航数',
      featureType: 'POINT',
      themeSetting: {
        customSettings: {},
        radius: 10,
        colors: ['#0000ff', '#00ffff', '#00ff00', '#ffff00', '#ff0000']
      },
      dataSource: {
        type: 'PORTAL_DATA',
        serverId: '1920557079'
      }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  title: 'unique_民航数据',
  version: '1.0'
};
const webmap_uniqueLayer_polygon = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427891
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427891
    }
  },
  level: 5,
  center: {
    x: 11810617.9363554,
    y: 4275239.3340175
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'China',
    url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
  },
  layers: [
    {
      layerType: 'UNIQUE',
      visible: true,
      themeSetting: {
        themeField: '行政区划_c',
        customSettings: {
          四川省: {
            strokeWidth: 1,
            fillColor: '#e6f599',
            fillOpacity: 0.9,
            lineDash: 'solid',
            strokeColor: '#ffffff',
            type: 'POLYGON',
            strokeOpacity: 1
          }
        },
        colors: ['#D53E4F', '#FC8D59', '#FEE08B', '#FFFFBF', '#E6F598', '#99D594', '#3288BD']
      },
      name: '市级行政区划_1_2',
      featureType: 'POLYGON',
      style: {
        strokeWidth: 1,
        fillColor: '#3288bd',
        fillOpacity: 0.9,
        lineDash: 'solid',
        strokeColor: '#ffffff',
        type: 'POLYGON',
        strokeOpacity: 1
      },
      projection: 'EPSG:4326',
      enableFields: ['Shape_Area', 'Shape_Leng', 'UserID', '分县连接成', '行政区划_1', '行政区划_2', '行政区划_c'],
      dataSource: {
        type: 'PORTAL_DATA',
        serverId: '1960447494'
      }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  title: 'unique_民航数据',
  version: '1.0'
};
const webmap_vectorLayer_point = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427891
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427891
    }
  },
  level: 5,
  center: {
    x: 11810617.9363554,
    y: 4275239.3340175
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'China',
    url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
  },
  layers: [
    {
      layerType: 'VECTOR',
      name: '浙江省高等院校(3)',
      visible: true,
      featureType: 'POINT',
      style: {
        radius: 6,
        fillColor: '#ff0000',
        fillOpacity: 0.9,
        strokeColor: '#ffffff',
        strokeWidth: 1,
        strokeOpacity: 1,
        lineDash: 'solid',
        symbolType: 'svg',
        type: 'BASIC_POINT'
      },
      dataSource: {
        type: 'PORTAL_DATA',
        serverId: '1920557079'
      }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  title: 'unique_民航数据',
  version: '1.0'
};

const webmap_vectorLayer_line = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427891
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427891
    }
  },
  level: 5,
  center: {
    x: 11810617.9363554,
    y: 4275239.3340175
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'China',
    url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China'
  },
  layers: [
    {
      layerType: 'VECTOR',
      name: '浙江省高等院校(3)',
      visible: true,
      featureType: 'LINE',
      style: {
        radius: 5,
        fillColor: '#ee4d5a',
        fillOpacity: 0.9,
        strokeColor: '#8b572a',
        strokeWidth: 7,
        strokeOpacity: 1,
        lineDash: 'solid',
        type: 'BASIC_POINT'
      },
      dataSource: {
        type: 'PORTAL_DATA',
        serverId: '1920557079'
      }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  title: 'unique_民航数据',
  version: '1.0'
};
const marker_data = {
  fileName: '未命名标注图层1.geojson',
  type: 'GEOJSON',
  lineNumber: null,
  content:
    '{"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"dataViz_title":"","dataViz_description":"","dataViz_imgUrl":"","dataViz_url":"","dataViz_videoUrl":""},"dv_v5_markerStyle":{"src":"http://fakeiportal/iportal/apps/dataviz/static/imgs/markers/ktv_red.png","scale":1,"anchor":[0.5,0.5],"imgWidth":48,"imgHeight":43},"dv_v5_markerInfo":{"dataViz_title":"","dataViz_description":"","dataViz_imgUrl":"","dataViz_url":"","dataViz_videoUrl":""},"geometry":{"type":"Point","coordinates":[-24.29687500000026,70.60610918076662]}}]}'
};

const iportal_content = {
  fileName: '民航数据1(1).csv',
  type: 'CSV',
  lineNumber: 222,
  content: airport
};
module.exports = {
  portal_data,
  portal_data1,
  chart_data,
  mapOptions,
  marker_data,
  iportal_content,
  webmap_markerLayer,
  webmap_ranksymbolLayer,
  webmap_heatLayer,
  webmap_uniqueLayer_polygon,
  webmap_vectorLayer_point,
  webmap_vectorLayer_line
};
