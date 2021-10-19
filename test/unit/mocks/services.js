import airport from './data/airport.json';

const portal_data = {
  extent: {
    leftBottom: {
      x: -20037508.342789248,
      y: -20037508.34278914
    },
    rightTop: {
      x: 20037508.342789244,
      y: 20037508.342789087
    }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: {
    x: 11615300.701720804,
    y: 4436879.386230171
  },
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
      xyField: {
        xField: 'longitude',
        yField: 'latitude'
      },
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
      dataSource: {
        accessType: 'DIRECT',
        type: 'PORTAL_DATA',
        serverId: '676516522'
      }
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
    leftBottom: {
      x: -20037508.342789248,
      y: -20037508.34278914
    },
    rightTop: {
      x: 20037508.342789244,
      y: 20037508.342789087
    }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: {
    x: 11615300.701720804,
    y: 4436879.386230171
  },
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
      xyField: {
        xField: 'longitude',
        yField: 'latitude'
      },
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
      dataSource: {
        accessType: 'DIRECT',
        type: 'PORTAL_DATA',
        serverId: 'wrong'
      }
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

const portalDataService = {
  dataMetaInfo: null,
  lastModfiedTime: 1552361419799,
  fileName: 'sichuan.geojson',
  dataItemServices: [
    {
      serviceType: 'RESTMAP',
      accessCount: 0,
      address: 'portalproxy/iserver/services/sichuan/rest',
      dataID: 1962026684,
      createTime: null,
      serviceStatus: 'PUBLISHED',
      editable: false,
      updateTime: null,
      serviceNode: 'z62wol8e',
      serviceID: 'sichuan',
      serviceName: 'sichuan'
    },
    {
      serviceType: 'RESTDATA',
      accessCount: 0,
      address: '/portalproxy/iserver/services/sichuan/rest',
      dataID: 1962026684,
      createTime: null,
      serviceStatus: 'PUBLISHED',
      editable: true,
      updateTime: null,
      serviceNode: 'z62wol8e',
      serviceID: 'sichuan',
      serviceName: 'sichuan'
    }
  ],
  dataCheckResult: {
    serviceCheckInfos: [
      {
        serviceType: 'RESTDATA',
        checkStatus: 'SUCCESS',
        checkMsg: null,
        dataType: 'GEOJSON',
        id: 9,
        MD5: 'c1e4a265e355de9a4aa2d5e40612285d'
      },
      {
        serviceType: 'RESTMAP',
        checkStatus: 'SUCCESS',
        checkMsg: null,
        dataType: 'GEOJSON',
        id: 35,
        MD5: 'c1e4a265e355de9a4aa2d5e40612285d'
      }
    ],
    dataCheckInfo: {
      checkStatus: 'SUCCESS',
      checkMsg: null,
      dataType: 'GEOJSON',
      id: 9,
      MD5: 'c1e4a265e355de9a4aa2d5e40612285d'
    }
  }
};
const restMap = [
  {
    visible: true,
    subLayers: {
      layers: [
        {
          ugcLayerType: 'VECTOR',
          visible: true,
          fieldValuesDisplayFilter: {
            fieldName: '',
            values: [],
            fieldValuesDisplayMode: 'DISABLE'
          },
          caption: 'dataGeoJson_1627314311@supermap2_pg',
          subLayers: {},
          type: 'UGC',
          datasetInfo: {
            type: 'REGION',
            dataSourceName: 'supermap2_pg',
            tableName: null
          },
          queryable: true,
          opaqueRate: 100,
          name: 'dataGeoJson_1627314311@supermap2_pg'
        }
      ]
    },
    type: 'UGC',
    name: 'mapOfsupermap2_pg'
  }
];
const restData = {
  datasetCount: 1,
  datasetNames: ['dataGeoJson_1627314311'],
  childUriList: [
    '/portalproxy/iserver/services/data_sichuan/rest/data/datasources/supermap2_pg/datasets/dataGeoJson_1627314311'
  ]
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

const webmap_tiandituLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427892
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427892
    }
  },
  maxScale: '1:18055.99093350616',
  level: 1,
  center: {
    x: 8586143.281685632,
    y: 356074.8698694445
  },
  baseLayer: {
    layerType: 'TIANDITU_TER_3857',
    labelLayerVisible: true,
    tk: '1d109683f4d84198e37a38c442d68311',
    name: '天地图地形'
  },
  layers: [],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:295829355.4545649',
  title: '无标题tianditu',
  version: '2.3.0',
  rootUrl: 'http://support.supermap.com.cn:8090/iportal/services/../',
  mapParams: {
    title: '无标题tianditu',
    description: ''
  }
};

const webmap_wmsLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427892
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427892
    }
  },
  maxScale: '1:144447.92746805',
  level: 1,
  center: {
    x: 7219425.62918168,
    y: -3039139.7858056696
  },
  baseLayer: {
    layerType: 'TILE',
    name: '中国暗色地图',
    url: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Dark'
  },
  layers: [
    {
      layerID: 'World',
      layerType: 'WMS',
      layers: ['1'],
      name: 'World',
      url: 'http://192.168.11.94:8090/iserver/services/map-world/wms111?',
      visible: true
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909131',
  title: '无标题',
  version: '2.3.0',
  mapParams: {
    title: '无标题',
    description: ''
  }
};

const webmap_wmtsLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427892
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427892
    }
  },
  maxScale: '1:144447.92746805',
  level: 1,
  center: {
    x: 7044436.526761852,
    y: -142311.41472421167
  },
  baseLayer: {
    layerType: 'TILE',
    visible: false,
    name: '中国暗色地图',
    url: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Dark'
  },
  layers: [
    {
      layerType: 'WMTS',
      tileMatrixSet: 'Custom_China',
      requestEncoding: 'KVP',
      visible: true,
      name: 'China',
      dpi: 90.7142857142857,
      url: 'http://support.supermap.com.cn:8090/iserver/services/map-china400/wmts100',
      layer: 'China',
      layerID: 'China'
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909131',
  title: '无标题',
  version: '2.3.0',
  mapParams: {
    title: '无标题',
    description: ''
  }
};

const webmap_xyzLayer = {
  extent: {
    leftBottom: {
      x: -20037508.34,
      y: -20037508.34
    },
    rightTop: {
      x: 20037508.34,
      y: 20037508.34
    }
  },
  maxScale: '1:564.2497165935246',
  level: 0,
  center: {
    x: 3723945.6807942055,
    y: -2268172.2613533167
  },
  baseLayer: {
    layerType: 'OSM',
    name: 'OpenStreetMap'
  },
  layers: [],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:295829355.4133858',
  title: '无标题',
  version: '2.3.0',
  rootUrl: 'http://192.168.11.94:8190/iportal/services/../',
  mapParams: {
    title: '无标题',
    description: ''
  }
};

const webmap_migrationLayer = {
  extent: {
    leftBottom: {
      x: -20037508.3427892,
      y: -20037508.3427892
    },
    rightTop: {
      x: 20037508.3427892,
      y: 20037508.3427892
    }
  },
  maxScale: '1:144447.92746805',
  level: 10,
  center: {
    x: 12970681.08359509,
    y: 4858329.28626181
  },
  baseLayer: {
    layerType: 'TILE',
    visible: true,
    name: '中国暗色地图',
    url: 'https://maptiles.supermapol.com/iserver/services/map_China/rest/maps/China_Dark'
  },
  layers: [
    {
      layerType: 'MIGRATION',
      labelSetting: {
        fontFamily: '黑体',
        color: '#62AD16',
        show: false
      },
      visible: true,
      name: '北京市轨道交通站点(13)',
      featureType: 'POINT',
      from: {
        xField: 'SmX',
        yField: 'SmY',
        type: 'XY_FIELD'
      },
      projection: 'EPSG:4326',
      to: {
        type: 'XY_FIELD'
      },
      enableFields: ['SmID', 'SmX', 'SmY', 'SmLibTileID', 'SmUserID', 'SmGeometrySize', 'SmGeoPosition', '标准名称'],
      lineSetting: {
        curveness: 0.2,
        color: '#62AD16',
        width: 1,
        type: 'solid',
        opacity: 0.6
      },
      dataSource: {
        accessType: 'DIRECT',
        type: 'PORTAL_DATA',
        serverId: '516597759'
      },
      animationSetting: {
        symbol: 'pin',
        symbolSize: 15,
        show: false,
        constantSpeed: 40
      }
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909131',
  title: '无标题point',
  version: '2.3.0',
  rootUrl: 'http://192.168.11.94:8190/iportal/services/../'
};

const webmap_rangeLayer = {
  extent: {
    leftBottom: {
      x: -20037508.342789248,
      y: -20037508.34278914
    },
    rightTop: {
      x: 20037508.342789244,
      y: 20037508.342789087
    }
  },
  maxScale: '1:144447.92746805',
  level: 10,
  center: {
    x: 12960700.474044422,
    y: 4861370.203808137
  },
  baseLayer: {
    layerType: 'TILE',
    name: 'ChinaDark',
    url: 'http://192.168.11.94:8090/iserver/services/map-china400/rest/maps/ChinaDark'
  },
  layers: [
    {
      layerType: 'RANGE',
      visible: true,
      themeSetting: {
        themeField: 'SmID',
        customSettings: {},
        segmentMethod: 'offset',
        segmentCount: 6,
        colors: ['#ffc6c4', '#f4a3a8', '#e38191', '#cc607d', '#ad466c', '#8b3058', '#672044']
      },
      name: '北京市轨道交通站点(9)',
      featureType: 'POINT',
      style: {
        strokeWidth: 1,
        fillColor: '#8b3058',
        offsetX: 0,
        offsetY: 0,
        fillOpacity: 0.9,
        radius: 8,
        strokeColor: '#ffffff',
        type: 'BASIC_POINT',
        strokeOpacity: 1
      },
      projection: 'EPSG:4326',
      enableFields: ['SmID', 'SmX', 'SmY', 'SmLibTileID', 'SmUserID', 'SmGeometrySize', 'SmGeoPosition', '标准名称'],
      dataSource: {
        accessType: 'DIRECT',
        type: 'PORTAL_DATA',
        serverId: '1473470625'
      },
      layerID: '北京市轨道交通站点(9)'
    }
  ],
  description: '',
  projection: 'EPSG:3857',
  minScale: '1:591658710.909131',
  title: '无标题',
  version: '2.3.0',
  rootUrl: 'http://192.168.11.94:8190/iportal/services/../',
  mapParams: {
    title: '无标题',
    description: ''
  }
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
    leftBottom: {
      x: -20037508.342789248,
      y: -20037508.34278914
    },
    rightTop: {
      x: 20037508.342789244,
      y: 20037508.342789087
    }
  },
  maxScale: '1:144447.927',
  level: 5,
  center: {
    x: 11615300.701720804,
    y: 4436879.386230171
  },
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
      xyField: {
        xField: 'longitude',
        yField: 'latitude'
      },
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
      dataSource: {
        accessType: 'DIRECT',
        type: 'PORTAL_DATA',
        serverId: '676516522'
      }
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

const echart_iPortal_data = {
  features: [
    {
      type: 'Feature',
      properties: {
        latitude: '40.07108',
        longitude: '116.588918',
        altitude: '',
        geometry: 'Point',
        机场: '北京/首都',
        X坐标: '116.588918',
        Y坐标: '40.07108'
      },
      geometry: {
        type: 'Point',
        coordinates: [116.588918, 40.07108]
      }
    },
    {
      type: 'Feature',
      properties: {
        latitude: '31.093992',
        longitude: '121.812361',
        altitude: '',
        geometry: 'Point',
        机场: '上海/浦东',
        X坐标: '121.812361',
        Y坐标: '31.093992'
      },
      geometry: {
        type: 'Point',
        coordinates: [121.812361, 31.093992]
      }
    }
  ],
  fieldCaptions: ['latitude', 'longitude', 'altitude', 'geometry', '机场', 'X坐标', 'Y坐标'],
  fieldValues: [
    ['40.07108', '31.093992'],
    ['116.588918', '121.812361'],
    ['', ''],
    ['Point', 'Point'],
    ['北京/首都', '上海/浦东'],
    ['116.588918', '121.812361'],
    ['40.07108', '31.093992']
  ]
};

const echart_rest_data = {
  data: {
    SMID: '2',
    SMSDRIW: '116.60084',
    SMSDRIN: '41.040543',
    SMSDRIE: '116.72102',
    SMSDRIS: '40.853382',
    SMUSERID: '4',
    SMAREA: '9.680888002534656E7',
    SMPERIMETER: '50298.305148811625',
    SMGEOMETRYSIZE: '360',
    LANDTYPE: '用材林',
    AREA: '97.0',
    AREA_1: '97'
  },
  success: true,
  code: 200
};

const rest_service_url = 'https://iserver.supermap.io/echart/rest/data';

const echartiPortalDataset = {
  type: 'iPortal',
  url: 'https://iportal.supermap.io/echart/iportal/data',
  maxFeatures: 2
};

const echartRestDataset = {
  type: 'rest',
  url: rest_service_url,
  maxFeatures: 2,
  dataName: ['Jingjin:Landuse_R'],
  attributeFilter: 'SmID = 2'
};

const echartBarDatasetOptions = [
  {
    seriesType: 'bar',
    isStastic: true,
    isStack: true,
    xField: '机场',
    yField: '2016起降架次（架次）'
  },
  {
    seriesType: 'bar',
    isStastic: true,
    isStack: true,
    xField: '机场',
    yField: '2017起降架次（架次）'
  }
];

const echartGaugeDatasetOptions = [
  {
    seriesType: 'gauge',
    isStastic: true,
    xField: 'LANDTYPE',
    yField: 'AREA'
  }
];

const echartBarOptions = {
  xAxis: [
    {
      data: ['北京/首都', '上海/浦东']
    }
  ],
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2016起降架次（架次）',
      data: [606081, 479902],
      stack: 1,
      tooltip: null
    },
    {
      type: 'bar',
      name: '2017起降架次（架次）',
      data: [597259, 496774],
      stack: 1,
      tooltip: null
    }
  ]
};

const echartGaugeOptions = {
  series: [
    {
      type: 'gauge',
      name: 'AREA',
      data: [97],
      stack: 0,
      tooltip: null
    }
  ]
};

module.exports = {
  portal_data,
  portal_data1,
  portalDataService,
  restMap,
  restData,
  chart_data,
  mapOptions,
  marker_data,
  iportal_content,
  webmap_markerLayer,
  webmap_ranksymbolLayer,
  webmap_heatLayer,
  webmap_uniqueLayer_polygon,
  webmap_vectorLayer_point,
  webmap_vectorLayer_line,
  webmap_tiandituLayer,
  webmap_wmsLayer,
  webmap_wmtsLayer,
  webmap_xyzLayer,
  webmap_migrationLayer,
  webmap_rangeLayer,
  echart_iPortal_data,
  echart_rest_data,
  echartiPortalDataset,
  echartBarDatasetOptions,
  echartBarOptions,
  echartRestDataset,
  echartGaugeDatasetOptions,
  echartGaugeOptions,
  rest_service_url
};
