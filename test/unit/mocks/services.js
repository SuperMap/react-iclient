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
      url: 'http://fakeiportal:8090/iserver/services/map-china400/wmts100',
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
const webmap_wmts100 = `<?xml version="1.0" encoding="UTF-8"?><Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://192.168.11.94:8090/iserver/services/map-Population/wmts100/wmts,1.0,wmtsGetCapabilities_response.xsd">
<ows:ServiceIdentification><ows:Title>示例 WMTS 服务</ows:Title><ows:Abstract>SuperMap iServer 基于示范数据发布的 WMTS 服务</ows:Abstract><ows:Keywords><ows:Keyword>iServer</ows:Keyword><ows:Keyword>Sample Data</ows:Keyword></ows:Keywords><ows:ServiceType>OGC WMTS</ows:ServiceType><ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion><ows:Fees>none</ows:Fees><ows:AccessConstraints>none</ows:AccessConstraints></ows:ServiceIdentification><ows:ServiceProvider><ows:ProviderName>北京超图软件股份有限公司</ows:ProviderName><ows:ProviderSite xlink:href="http://www.supermap.com.cn"/><ows:ServiceContact><ows:IndividualName>联系人姓名</ows:IndividualName><ows:PositionName>联系人职位</ows:PositionName><ows:ContactInfo><ows:Phone><ows:Voice>+86-10-59896655</ows:Voice><ows:Facsimile>+86-10-59896666</ows:Facsimile></ows:Phone><ows:Address><ows:DeliveryPoint>北京市朝阳区酒仙桥北路甲10号院电子城IT产业园107号楼6层北京超图软件股份有限公司</ows:DeliveryPoint><ows:City>北京</ows:City><ows:AdministrativeArea>北京</ows:AdministrativeArea><ows:PostalCode>100015</ows:PostalCode><ows:Country>中国</ows:Country><ows:ElectronicMailAddress>support@supermap.com</ows:ElectronicMailAddress></ows:Address></ows:ContactInfo></ows:ServiceContact></ows:ServiceProvider><ows:OperationsMetadata>
  <ows:Operation name="GetCapabilities">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
    <ows:Parameter name="AcceptFormats">
      <ows:AllowedValues>
        <ows:Value>application/xml</ows:Value>
      </ows:AllowedValues>
    </ows:Parameter>
  </ows:Operation>
  <ows:Operation name="GetTile">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
  </ows:Operation>
  <ows:Operation name="GetFeatureInfo">
    <ows:DCP>
      <ows:HTTP>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>RESTFUL</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
        <ows:Get xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100?">
          <ows:Constraint name="GetEncoding">
            <ows:AllowedValues>
              <ows:Value>KVP</ows:Value>
            </ows:AllowedValues>
          </ows:Constraint>
        </ows:Get>
      </ows:HTTP>
    </ows:DCP>
  </ows:Operation>
</ows:OperationsMetadata>
<Contents>
  <Layer>
    <ows:Title>PopulationDistribution</ows:Title>
    <ows:Identifier>PopulationDistribution</ows:Identifier>
    <ows:BoundingBox crs="urn:ogc:def:crs:EPSG::3857">
      <ows:LowerCorner>8009146.115071949 382872.01868254057</ows:LowerCorner>
      <ows:UpperCorner>1.5037846241523674E7 7087311.00490398</ows:UpperCorner>
    </ows:BoundingBox>
    <ows:WGS84BoundingBox crs="urn:ogc:def:crs:OGC:2:84">
      <ows:LowerCorner>71.94738367915619 3.4373340998870576</ows:LowerCorner>
      <ows:UpperCorner>135.08727119000017 53.560261104103134</ows:UpperCorner>
    </ows:WGS84BoundingBox>
    <Style isDefault="true">
    <ows:Identifier>default</ows:Identifier>
    </Style>
    <Format>image/png</Format>
    <InfoFormat>application/xml</InfoFormat>
    <TileMatrixSetLink>
    <TileMatrixSet>Custom_PopulationDistribution</TileMatrixSet>
    </TileMatrixSetLink>
    <TileMatrixSetLink>
    <TileMatrixSet>GlobalCRS84Scale_PopulationDistribution</TileMatrixSet>
      <TileMatrixSetLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:0</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>0</MinTileCol>
    <MaxTileCol>0</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:1</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>1</MinTileCol>
    <MaxTileCol>1</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:2</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>1</MaxTileRow>
    <MinTileCol>3</MinTileCol>
    <MaxTileCol>4</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:3</TileMatrix>
    <MinTileRow>1</MinTileRow>
    <MaxTileRow>2</MaxTileRow>
    <MinTileCol>7</MinTileCol>
    <MaxTileCol>9</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:4</TileMatrix>
    <MinTileRow>2</MinTileRow>
    <MaxTileRow>5</MaxTileRow>
    <MinTileCol>15</MinTileCol>
    <MaxTileCol>19</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:5</TileMatrix>
    <MinTileRow>5</MinTileRow>
    <MaxTileRow>13</MaxTileRow>
    <MinTileCol>39</MinTileCol>
    <MaxTileCol>48</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:6</TileMatrix>
    <MinTileRow>11</MinTileRow>
    <MaxTileRow>26</MaxTileRow>
    <MinTileCol>78</MinTileCol>
    <MaxTileCol>97</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:7</TileMatrix>
    <MinTileRow>22</MinTileRow>
    <MaxTileRow>53</MaxTileRow>
    <MinTileCol>156</MinTileCol>
    <MaxTileCol>195</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:8</TileMatrix>
    <MinTileRow>56</MinTileRow>
    <MaxTileRow>134</MaxTileRow>
    <MinTileCol>391</MinTileCol>
    <MaxTileCol>489</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:9</TileMatrix>
    <MinTileRow>113</MinTileRow>
    <MaxTileRow>268</MaxTileRow>
    <MinTileCol>782</MinTileCol>
    <MaxTileCol>978</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:10</TileMatrix>
    <MinTileRow>226</MinTileRow>
    <MaxTileRow>537</MaxTileRow>
    <MinTileCol>1565</MinTileCol>
    <MaxTileCol>1957</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:11</TileMatrix>
    <MinTileRow>565</MinTileRow>
    <MaxTileRow>1344</MaxTileRow>
    <MinTileCol>3912</MinTileCol>
    <MaxTileCol>4893</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:12</TileMatrix>
    <MinTileRow>1131</MinTileRow>
    <MaxTileRow>2688</MaxTileRow>
    <MinTileCol>7825</MinTileCol>
    <MaxTileCol>9786</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:13</TileMatrix>
    <MinTileRow>2263</MinTileRow>
    <MaxTileRow>5377</MaxTileRow>
    <MinTileCol>15651</MinTileCol>
    <MaxTileCol>19573</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:14</TileMatrix>
    <MinTileRow>5659</MinTileRow>
    <MaxTileRow>13443</MaxTileRow>
    <MinTileCol>39127</MinTileCol>
    <MaxTileCol>48933</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:15</TileMatrix>
    <MinTileRow>11318</MinTileRow>
    <MaxTileRow>26886</MaxTileRow>
    <MinTileCol>78255</MinTileCol>
    <MaxTileCol>97866</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:16</TileMatrix>
    <MinTileRow>22636</MinTileRow>
    <MaxTileRow>53772</MaxTileRow>
    <MinTileCol>156510</MinTileCol>
    <MaxTileCol>195733</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:17</TileMatrix>
    <MinTileRow>56591</MinTileRow>
    <MaxTileRow>134432</MaxTileRow>
    <MinTileCol>391275</MinTileCol>
    <MaxTileCol>489332</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:18</TileMatrix>
    <MinTileRow>113182</MinTileRow>
    <MaxTileRow>268864</MaxTileRow>
    <MinTileCol>782551</MinTileCol>
    <MaxTileCol>978665</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:19</TileMatrix>
    <MinTileRow>226364</MinTileRow>
    <MaxTileRow>537729</MaxTileRow>
    <MinTileCol>1565103</MinTileCol>
    <MaxTileCol>1957330</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GlobalCRS84Scale:20</TileMatrix>
    <MinTileRow>565911</MinTileRow>
    <MaxTileRow>1344323</MaxTileRow>
    <MinTileCol>3912758</MinTileCol>
    <MaxTileCol>4893325</MaxTileCol>
    </TileMatrixLimits>
      </TileMatrixSetLimits>
    </TileMatrixSetLink>
    <TileMatrixSetLink>
    <TileMatrixSet>GoogleMapsCompatible_PopulationDistribution</TileMatrixSet>
      <TileMatrixSetLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:0</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>0</MinTileCol>
    <MaxTileCol>0</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:1</TileMatrix>
    <MinTileRow>0</MinTileRow>
    <MaxTileRow>0</MaxTileRow>
    <MinTileCol>1</MinTileCol>
    <MaxTileCol>1</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:2</TileMatrix>
    <MinTileRow>1</MinTileRow>
    <MaxTileRow>1</MaxTileRow>
    <MinTileCol>2</MinTileCol>
    <MaxTileCol>3</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:3</TileMatrix>
    <MinTileRow>2</MinTileRow>
    <MaxTileRow>3</MaxTileRow>
    <MinTileCol>5</MinTileCol>
    <MaxTileCol>7</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:4</TileMatrix>
    <MinTileRow>5</MinTileRow>
    <MaxTileRow>7</MaxTileRow>
    <MinTileCol>11</MinTileCol>
    <MaxTileCol>14</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:5</TileMatrix>
    <MinTileRow>10</MinTileRow>
    <MaxTileRow>15</MaxTileRow>
    <MinTileCol>22</MinTileCol>
    <MaxTileCol>28</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:6</TileMatrix>
    <MinTileRow>20</MinTileRow>
    <MaxTileRow>31</MaxTileRow>
    <MinTileCol>44</MinTileCol>
    <MaxTileCol>56</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:7</TileMatrix>
    <MinTileRow>41</MinTileRow>
    <MaxTileRow>62</MaxTileRow>
    <MinTileCol>89</MinTileCol>
    <MaxTileCol>112</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:8</TileMatrix>
    <MinTileRow>82</MinTileRow>
    <MaxTileRow>125</MaxTileRow>
    <MinTileCol>179</MinTileCol>
    <MaxTileCol>224</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:9</TileMatrix>
    <MinTileRow>165</MinTileRow>
    <MaxTileRow>251</MaxTileRow>
    <MinTileCol>358</MinTileCol>
    <MaxTileCol>448</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:10</TileMatrix>
    <MinTileRow>330</MinTileRow>
    <MaxTileRow>502</MaxTileRow>
    <MinTileCol>716</MinTileCol>
    <MaxTileCol>896</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:11</TileMatrix>
    <MinTileRow>661</MinTileRow>
    <MaxTileRow>1004</MaxTileRow>
    <MinTileCol>1433</MinTileCol>
    <MaxTileCol>1792</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:12</TileMatrix>
    <MinTileRow>1323</MinTileRow>
    <MaxTileRow>2008</MaxTileRow>
    <MinTileCol>2866</MinTileCol>
    <MaxTileCol>3584</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:13</TileMatrix>
    <MinTileRow>2647</MinTileRow>
    <MaxTileRow>4017</MaxTileRow>
    <MinTileCol>5733</MinTileCol>
    <MaxTileCol>7169</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:14</TileMatrix>
    <MinTileRow>5294</MinTileRow>
    <MaxTileRow>8035</MaxTileRow>
    <MinTileCol>11466</MinTileCol>
    <MaxTileCol>14339</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:15</TileMatrix>
    <MinTileRow>10588</MinTileRow>
    <MaxTileRow>16070</MaxTileRow>
    <MinTileCol>22932</MinTileCol>
    <MaxTileCol>28679</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:16</TileMatrix>
    <MinTileRow>21177</MinTileRow>
    <MaxTileRow>32141</MaxTileRow>
    <MinTileCol>45865</MinTileCol>
    <MaxTileCol>57359</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:17</TileMatrix>
    <MinTileRow>42355</MinTileRow>
    <MaxTileRow>64283</MaxTileRow>
    <MinTileCol>91731</MinTileCol>
    <MaxTileCol>114719</MaxTileCol>
    </TileMatrixLimits>
    <TileMatrixLimits>
    <TileMatrix>GoogleMapsCompatible:18</TileMatrix>
    <MinTileRow>84711</MinTileRow>
    <MaxTileRow>128567</MaxTileRow>
    <MinTileCol>183462</MinTileCol>
    <MaxTileCol>229439</MaxTileCol>
    </TileMatrixLimits>
      </TileMatrixSetLimits>
    </TileMatrixSetLink>
    <ResourceURL format="image/png" resourceType="tile" template="http://192.168.11.94:8090/iserver/services/map-Population/wmts100/PopulationDistribution/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png"/>
    <ResourceURL format="application/xml" resourceType="FeatureInfo" template="http://192.168.11.94:8090/iserver/services/map-Population/wmts100/PopulationDistribution/default/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}.xml"/>
  </Layer>
  <TileMatrixSet>
  <ows:Identifier>Custom_PopulationDistribution</ows:Identifier>
  <ows:SupportedCRS>urn:ogc:def:crs:EPSG::3857</ows:SupportedCRS>
  <WellKnownScaleSet>Custom</WellKnownScaleSet>
<!--The dpi of current tile matrix set is 90.7142857142857,the following scales has calculated based on it.-->    <TileMatrix>
  <ows:Identifier>0</ows:Identifier>
  <ScaleDenominator>9.805664238911445E7</ScaleDenominator>
<!--<Resolution>27455.85986895205</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1</MatrixWidth>
  <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>1</ows:Identifier>
  <ScaleDenominator>4.902832119455723E7</ScaleDenominator>
<!--<Resolution>13727.929934476026</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2</MatrixWidth>
  <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>2</ows:Identifier>
  <ScaleDenominator>2.4514160597278614E7</ScaleDenominator>
<!--<Resolution>6863.964967238013</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4</MatrixWidth>
  <MatrixHeight>4</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>3</ows:Identifier>
  <ScaleDenominator>1.2257080298639307E7</ScaleDenominator>
<!--<Resolution>3431.9824836190064</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8</MatrixWidth>
  <MatrixHeight>8</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>4</ows:Identifier>
  <ScaleDenominator>6128540.149319653</ScaleDenominator>
<!--<Resolution>1715.9912418095032</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16</MatrixWidth>
  <MatrixHeight>16</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>5</ows:Identifier>
  <ScaleDenominator>3064270.0746598267</ScaleDenominator>
<!--<Resolution>857.9956209047516</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32</MatrixWidth>
  <MatrixHeight>31</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>6</ows:Identifier>
  <ScaleDenominator>1532135.0373299133</ScaleDenominator>
<!--<Resolution>428.9978104523758</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>64</MatrixWidth>
  <MatrixHeight>62</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>7</ows:Identifier>
  <ScaleDenominator>766067.5186649567</ScaleDenominator>
<!--<Resolution>214.4989052261879</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>128</MatrixWidth>
  <MatrixHeight>123</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>8</ows:Identifier>
  <ScaleDenominator>383033.75933247834</ScaleDenominator>
<!--<Resolution>107.24945261309395</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>256</MatrixWidth>
  <MatrixHeight>245</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>9</ows:Identifier>
  <ScaleDenominator>191516.87966623917</ScaleDenominator>
<!--<Resolution>53.624726306546975</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>512</MatrixWidth>
  <MatrixHeight>489</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>10</ows:Identifier>
  <ScaleDenominator>95758.43983311958</ScaleDenominator>
<!--<Resolution>26.812363153273488</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1024</MatrixWidth>
  <MatrixHeight>977</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>11</ows:Identifier>
  <ScaleDenominator>47879.21991655979</ScaleDenominator>
<!--<Resolution>13.406181576636744</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2048</MatrixWidth>
  <MatrixHeight>1954</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>12</ows:Identifier>
  <ScaleDenominator>23939.609958279896</ScaleDenominator>
<!--<Resolution>6.703090788318372</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4096</MatrixWidth>
  <MatrixHeight>3908</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>13</ows:Identifier>
  <ScaleDenominator>11969.804979139948</ScaleDenominator>
<!--<Resolution>3.351545394159186</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8192</MatrixWidth>
  <MatrixHeight>7815</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>14</ows:Identifier>
  <ScaleDenominator>5984.902489569974</ScaleDenominator>
<!--<Resolution>1.675772697079593</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16384</MatrixWidth>
  <MatrixHeight>15629</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>15</ows:Identifier>
  <ScaleDenominator>2992.451244784987</ScaleDenominator>
<!--<Resolution>0.8378863485397965</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32768</MatrixWidth>
  <MatrixHeight>31257</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>16</ows:Identifier>
  <ScaleDenominator>1496.2256223924935</ScaleDenominator>
<!--<Resolution>0.41894317426989824</Resolution>-->  <TopLeftCorner>8009146.115071949 7087311.00490398</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>65536</MatrixWidth>
  <MatrixHeight>62513</MatrixHeight>
    </TileMatrix>
  </TileMatrixSet>
  <TileMatrixSet>
  <ows:Identifier>GlobalCRS84Scale_PopulationDistribution</ows:Identifier>
  <ows:SupportedCRS>urn:ogc:def:crs:EPSG::4326</ows:SupportedCRS>
  <WellKnownScaleSet>GlobalCRS84Scale</WellKnownScaleSet>
<!--The dpi of current tile matrix set assumes 0.28mm as the physical distance of a pixel,which defined by OGC specification.-->    <TileMatrix>
  <ows:Identifier>0</ows:Identifier>
  <ScaleDenominator>5.0E8</ScaleDenominator>
<!--<Resolution>1.25764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2</MatrixWidth>
  <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>1</ows:Identifier>
  <ScaleDenominator>2.5E8</ScaleDenominator>
<!--<Resolution>0.628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>3</MatrixWidth>
  <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>2</ows:Identifier>
  <ScaleDenominator>1.0E8</ScaleDenominator>
<!--<Resolution>0.251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>6</MatrixWidth>
  <MatrixHeight>3</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>3</ows:Identifier>
  <ScaleDenominator>5.0E7</ScaleDenominator>
<!--<Resolution>0.125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>12</MatrixWidth>
  <MatrixHeight>6</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>4</ows:Identifier>
  <ScaleDenominator>2.5E7</ScaleDenominator>
<!--<Resolution>0.0628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>23</MatrixWidth>
  <MatrixHeight>12</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>5</ows:Identifier>
  <ScaleDenominator>1.0E7</ScaleDenominator>
<!--<Resolution>0.0251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>56</MatrixWidth>
  <MatrixHeight>28</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>6</ows:Identifier>
  <ScaleDenominator>5000000.0</ScaleDenominator>
<!--<Resolution>0.0125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>112</MatrixWidth>
  <MatrixHeight>56</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>7</ows:Identifier>
  <ScaleDenominator>2500000.0</ScaleDenominator>
<!--<Resolution>0.00628820698883665</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>224</MatrixWidth>
  <MatrixHeight>112</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>8</ows:Identifier>
  <ScaleDenominator>1000000.0</ScaleDenominator>
<!--<Resolution>0.00251528279553466</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>560</MatrixWidth>
  <MatrixHeight>280</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>9</ows:Identifier>
  <ScaleDenominator>500000.0</ScaleDenominator>
<!--<Resolution>0.00125764139776733</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1119</MatrixWidth>
  <MatrixHeight>560</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>10</ows:Identifier>
  <ScaleDenominator>250000.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2237</MatrixWidth>
  <MatrixHeight>1119</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>11</ows:Identifier>
  <ScaleDenominator>100000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>5591</MatrixWidth>
  <MatrixHeight>2796</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>12</ows:Identifier>
  <ScaleDenominator>50000.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-4</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>11182</MatrixWidth>
  <MatrixHeight>5591</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>13</ows:Identifier>
  <ScaleDenominator>25000.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>22364</MatrixWidth>
  <MatrixHeight>11182</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>14</ows:Identifier>
  <ScaleDenominator>10000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>55909</MatrixWidth>
  <MatrixHeight>27955</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>15</ows:Identifier>
  <ScaleDenominator>5000.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-5</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>111817</MatrixWidth>
  <MatrixHeight>55909</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>16</ows:Identifier>
  <ScaleDenominator>2500.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>223633</MatrixWidth>
  <MatrixHeight>111817</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>17</ows:Identifier>
  <ScaleDenominator>1000.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>559083</MatrixWidth>
  <MatrixHeight>279542</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>18</ows:Identifier>
  <ScaleDenominator>500.0</ScaleDenominator>
<!--<Resolution>1.25764139776733E-6</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1118165</MatrixWidth>
  <MatrixHeight>559083</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>19</ows:Identifier>
  <ScaleDenominator>250.0</ScaleDenominator>
<!--<Resolution>6.28820698883665E-7</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2236330</MatrixWidth>
  <MatrixHeight>1118165</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>20</ows:Identifier>
  <ScaleDenominator>100.0</ScaleDenominator>
<!--<Resolution>2.51528279553466E-7</Resolution>-->  <TopLeftCorner>90.0 -180.0</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>5590823</MatrixWidth>
  <MatrixHeight>2795412</MatrixHeight>
    </TileMatrix>
  </TileMatrixSet>
  <TileMatrixSet>
  <ows:Identifier>GoogleMapsCompatible_PopulationDistribution</ows:Identifier>
  <ows:SupportedCRS>urn:ogc:def:crs:EPSG::3857</ows:SupportedCRS>
  <WellKnownScaleSet>GoogleMapsCompatible</WellKnownScaleSet>
<!--The dpi of current tile matrix set assumes 0.28mm as the physical distance of a pixel,which defined by OGC specification.-->    <TileMatrix>
  <ows:Identifier>0</ows:Identifier>
  <ScaleDenominator>5.590822640287178E8</ScaleDenominator>
<!--<Resolution>156543.033928041</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1</MatrixWidth>
  <MatrixHeight>1</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>1</ows:Identifier>
  <ScaleDenominator>2.795411320143589E8</ScaleDenominator>
<!--<Resolution>78271.5169640205</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2</MatrixWidth>
  <MatrixHeight>2</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>2</ows:Identifier>
  <ScaleDenominator>1.3977056600717944E8</ScaleDenominator>
<!--<Resolution>39135.75848201025</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4</MatrixWidth>
  <MatrixHeight>4</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>3</ows:Identifier>
  <ScaleDenominator>6.988528300358972E7</ScaleDenominator>
<!--<Resolution>19567.879241005125</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8</MatrixWidth>
  <MatrixHeight>8</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>4</ows:Identifier>
  <ScaleDenominator>3.494264150179486E7</ScaleDenominator>
<!--<Resolution>9783.939620502562</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16</MatrixWidth>
  <MatrixHeight>16</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>5</ows:Identifier>
  <ScaleDenominator>1.747132075089743E7</ScaleDenominator>
<!--<Resolution>4891.969810251281</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32</MatrixWidth>
  <MatrixHeight>32</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>6</ows:Identifier>
  <ScaleDenominator>8735660.375448715</ScaleDenominator>
<!--<Resolution>2445.9849051256406</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>64</MatrixWidth>
  <MatrixHeight>64</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>7</ows:Identifier>
  <ScaleDenominator>4367830.1877243575</ScaleDenominator>
<!--<Resolution>1222.9924525628203</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>128</MatrixWidth>
  <MatrixHeight>128</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>8</ows:Identifier>
  <ScaleDenominator>2183915.0938621787</ScaleDenominator>
<!--<Resolution>611.4962262814101</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>256</MatrixWidth>
  <MatrixHeight>256</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>9</ows:Identifier>
  <ScaleDenominator>1091957.5469310894</ScaleDenominator>
<!--<Resolution>305.7481131407051</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>512</MatrixWidth>
  <MatrixHeight>512</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>10</ows:Identifier>
  <ScaleDenominator>545978.7734655447</ScaleDenominator>
<!--<Resolution>152.87405657035254</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>1024</MatrixWidth>
  <MatrixHeight>1024</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>11</ows:Identifier>
  <ScaleDenominator>272989.38673277234</ScaleDenominator>
<!--<Resolution>76.43702828517627</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>2048</MatrixWidth>
  <MatrixHeight>2048</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>12</ows:Identifier>
  <ScaleDenominator>136494.69336638617</ScaleDenominator>
<!--<Resolution>38.218514142588134</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>4096</MatrixWidth>
  <MatrixHeight>4096</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>13</ows:Identifier>
  <ScaleDenominator>68247.34668319309</ScaleDenominator>
<!--<Resolution>19.109257071294067</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>8192</MatrixWidth>
  <MatrixHeight>8192</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>14</ows:Identifier>
  <ScaleDenominator>34123.67334159654</ScaleDenominator>
<!--<Resolution>9.554628535647034</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>16384</MatrixWidth>
  <MatrixHeight>16384</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>15</ows:Identifier>
  <ScaleDenominator>17061.83667079827</ScaleDenominator>
<!--<Resolution>4.777314267823517</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>32768</MatrixWidth>
  <MatrixHeight>32768</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>16</ows:Identifier>
  <ScaleDenominator>8530.918335399136</ScaleDenominator>
<!--<Resolution>2.3886571339117584</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>65536</MatrixWidth>
  <MatrixHeight>65536</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>17</ows:Identifier>
  <ScaleDenominator>4265.459167699568</ScaleDenominator>
<!--<Resolution>1.1943285669558792</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>131072</MatrixWidth>
  <MatrixHeight>131072</MatrixHeight>
    </TileMatrix>
    <TileMatrix>
  <ows:Identifier>18</ows:Identifier>
  <ScaleDenominator>2132.729583849784</ScaleDenominator>
<!--<Resolution>0.5971642834779396</Resolution>-->  <TopLeftCorner>-2.0037508342787E7 2.0037508342787E7</TopLeftCorner>
  <TileWidth>256</TileWidth>
  <TileHeight>256</TileHeight>
  <MatrixWidth>262144</MatrixWidth>
  <MatrixHeight>262144</MatrixHeight>
    </TileMatrix>
  </TileMatrixSet>
</Contents>
<ServiceMetadataURL xlink:href="http://192.168.11.94:8090/iserver/services/map-Population/wmts100/1.0.0/WMTSCapabilities.xml"/>
</Capabilities>`

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
  webmap_wmts100,
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
