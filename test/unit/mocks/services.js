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

module.exports = { portal_data, portal_data1, chart_data };
